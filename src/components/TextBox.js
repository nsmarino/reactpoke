import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import MoveBox from './ActionBox'

import { playerDecide, enemyDecide, enemyAction } from '../reducers/stageReducer'

const TextBoxDiv = styled.div`
  border-style: double;
  border-width: 4px;
  border-radius: 5px;
  height: 6em;
  font-family: monospace;
  font-size: 1.2em;
  background-color: whitesmoke;
  display: flex;
`

const TextBox = () => {
  const dispatch = useDispatch()
  const text = useSelector(state => state.text)
  const stage = useSelector(state => state.stage)

  const handleClick = () => {
    // eslint-disable-next-line
    switch (stage) {
      case 'enemyPresent': //
        dispatch(playerDecide())
        break;
      case 'playerEffect': //
        dispatch(enemyDecide())
        break;
      case 'enemyDecide': //
        dispatch(enemyAction())
        break;
      case 'enemyEffect': //
        dispatch(playerDecide())
        break;
    }
  }
  return (
    <TextBoxDiv onClick={handleClick}>
      <div>{text}</div>

      {stage==='playerDecide'? 
        <MoveBox />
        :
        null
      }

      { stage==='enemyPresent' || 
        stage==='playerEffect' || 
        stage==='enemyDecide' || 
        stage==='enemyEffect'
        ? 
        <p className="blinker">⮟</p>
        :
        null
      }
    </TextBoxDiv>
  )
}

export default TextBox

// Switch can be error-prone and unnecessarily verbose in many cases. You might consider using an object indexed by team name instead:

// const teams = {
//   LFC: () => (<Liverpool />),
//   MUFC: () => (<TerribleTeam />),
//   Chelsea: () => (<Blues />)
// }
// const App = (chosenTeam) => {
//   return {teams[chosenTeam]()}
// }