import React from 'react'
import { useSelector } from 'react-redux'

import PlayerStatus from './PlayerStatus'

const Player = () => {
  const player = useSelector(state => state.player)

  return (
    <div className="playerContainer">
      <div className="playerSprite" style={player.sprite}></div>
      <PlayerStatus pokemon={player} />
    </div>
  )
}

export default Player