import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { playerAction } from '../reducers/stageReducer'
import { setPlayerAction } from '../reducers/actionReducer'

const Player = () => {
  const dispatch = useDispatch()
  const player = useSelector(state => state.player)
  const stage = useSelector(state => state.stage)

  const handleAttack = (move) => {
      dispatch(setPlayerAction(move))
      dispatch(playerAction()) 
  }

  const displayMoves = () => {
    return player.moveset.map(move => 
      <button 
        key={move.title} 
        onClick={() => handleAttack(move)}>
          {move.title}
      </button>)
  }

  return (
    <div className="playerContainer">
      <h1>{player.name}</h1>
      <p>Level {player.level}</p>
      <p>health {player.currentHealth}/{player.health}</p>
      <img src={player.avatar} alt="" width='150px'/>
      <div className='movesContainer'>
        {stage==='playerDecide' ?
          displayMoves()
          :
          null
        }
      </div>
    </div>
  )
}

export default Player