import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { updateText } from '../reducers/textReducer'
import { updateEnemyHealth } from '../reducers/enemyReducer'
import { victory, enemyTurn } from '../reducers/stageReducer'


const Player = () => {
  const dispatch = useDispatch()
  const player = useSelector(state => state.player)
  const enemy = useSelector(state => state.enemy)
  const stage = useSelector(state => state.stage)

  const handleAttack = (move) => {
    dispatch(updateText(`${player.name} used ${move.title}`))
    const newEnemyHealth = enemy.currentHealth - move.damage
    if (newEnemyHealth === 0) {
      dispatch(victory())
    } else {
      dispatch(updateEnemyHealth(newEnemyHealth))
      setTimeout(() => dispatch(enemyTurn()), 2000)
    }
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
        {stage==='victory' ? 
          <div className="victory">This guy is the winner.</div>
          :
          displayMoves()
        }
      </div>
    </div>
  )
}

export default Player