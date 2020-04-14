import React from 'react'

import { useSelector } from 'react-redux'

// PRESENTATIONAL COMPONENT
const Enemy = () => {
  const enemy = useSelector(state => state.enemy)
  const stage = useSelector(state => state.stage)
  if (stage === 'victory') return null
  return (
    <div className="enemyContainer">

      <div className="enemyStatus">
        <h1>{enemy.name}</h1>
        <p>Level {enemy.level}</p>
        <p>health {enemy.currentHealth}/{enemy.health}</p>
      </div>
      
      <div style={enemy.sprite}></div>
    </div>
  )
}

export default Enemy