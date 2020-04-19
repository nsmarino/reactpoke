// libraries
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
// reducers
// import { playerDecide, enemyDecide, enemyAction } from '../reducers/stageReducer'
import { newTextArray } from '../reducers/textArrayReducer'
//components
import MoveBox from './ActionBox'

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
  top: 25em;
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
      console.log('next stage')
      dispatch(newTextArray(['new text array, string one', 'new, string two']))

      const stageAfter = {
        enemyPresent: () => console.log('go to player decide'), // dispatch(playerDecide())
        playerEffect: () => console.log('go to enemy decide'),// dispatch(enemyDecide())
        enemyDecide: () => console.log('go to enemy action'),//dispatch(enemyAction())
        enemyEffect: () => console.log('go to player decide'),//dispatch(playerDecide())
      }
      return stageAfter[currentStage]()
    }

    textArray.length === counter + 1 ? nextStage() : setCounter(counter + 1)
  }

  // test detritus
  // return (
  //   <>
  //     <button onClick={() => handleClick(stage)}>test</button>
  //     <p style={{color: 'white'}}>{textArray[counter]}</p>
  //   </>
  // )
  return (
    <TextBoxDiv onClick={() => handleClick(stage)}>
      <div>{textArray[counter]}</div>
      { stage==='playerDecide'? <MoveBox /> : null }
    </TextBoxDiv>
  )

}

export default NewTextBox