import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MoveBox from './MoveBox'
import { playerDecide, enemyDecide, enemyAction } from '../reducers/stageReducer'

const TextBox = () => {

  // redux hooks
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
      <div className="textContainer" onClick={handleClick}>
        <div>{text}</div>

        {stage==='playerDecide'? 
        <MoveBox />
        :
        null
        }

        {stage==='enemyPresent' || 
        stage==='playerEffect' || 
        stage==='enemyDecide' || 
        stage==='enemyEffect'
        ? 
        <p className="blinker">⮟</p>
        :
        null
        }
      </div>
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