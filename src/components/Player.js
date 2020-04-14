import React from 'react'

import { useSelector } from 'react-redux'

const Player = () => {
  const player = useSelector(state => state.player)

  return (
    <div className="playerContainer">
      <div className="playerSprite" style={player.sprite}></div>

      <div className='playerStatus'>
        <h1>{player.name}</h1>
        <p>Level {player.level}</p>
        <p>health {player.currentHealth}/{player.health}</p>
      </div>
    </div>
  )
}

export default Player