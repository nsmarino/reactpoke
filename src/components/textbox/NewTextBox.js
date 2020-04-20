// libraries
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
// reducers
import { enemyPresent, playerDecide, playerEffect, enemyDecide, enemyAction, enemyEffect } from '../../reducers/stageReducer'
//components
import ActionTest from './ActionTest'

const TextBoxDiv = styled.div`
  box-sizing: border-box;
  border-style: double;
  border-width: .25em;
  border-radius: .25em;
  height: 7em;
  width: 25em;
  font-family: monospace;
  background-color: whitesmoke;
  display: flex;
  position: absolute;
  left: 0em;
  top: 18em;
`

const NewTextBox = () => {
  // sets which index of textArray is displayed
  const [counter, setCounter ] = useState(0)

  const dispatch = useDispatch()

  const stage = useSelector(state => state.stage)
  const textArray = useSelector(state => state.textArray)

  function handleClick(currentStage) {  
    console.log(counter, textArray[counter])

    // only called when final text string is clicked on
    const nextStage = () => {
      setCounter(0)

      const stageAfter = {
        enemyAppear: () => dispatch(enemyPresent()), 
        enemyPresent: () => dispatch(playerDecide()),
        playerDecide: () => null,
        playerAction: () => dispatch(playerEffect()),
        playerEffect: () => dispatch(enemyDecide()),
        enemyDecide: () => dispatch(enemyAction()),
        enemyAction: () => dispatch(enemyEffect()),
        enemyEffect: () => dispatch(playerDecide()),
        victory: () => null,
        defeat: () => null,
        rewards: () => null,
      }
      return stageAfter[currentStage]()
    }

    textArray.length === counter + 1 ? nextStage() : setCounter(counter + 1)
  }

  return (
    <TextBoxDiv onClick={() => handleClick(stage)}>
      <div>{textArray[counter]}</div>
      { stage==='playerDecide'? <ActionTest /> : null }
    </TextBoxDiv>
  )

}

export default NewTextBox