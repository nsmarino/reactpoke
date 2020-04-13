import React from 'react'

import { useSelector } from 'react-redux'

// PRESENTATIONAL COMPONENT
const Enemy = () => {
  const enemy = useSelector(state => state.enemy)
  return (
    <div className="enemyContainer">
      <h1>{enemy.name}</h1>
      <p>Level {enemy.level}</p>
      <p>health {enemy.currentHealth}/{enemy.health}</p>
      <img src={enemy.avatar} alt="" width='150px'/>
    </div>
  )
}

export default Enemy