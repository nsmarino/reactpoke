import React from 'react'

import { useSelector } from 'react-redux'

const Enemy = () => {
  const enemy = useSelector(state => state.enemy)
  const mode = useSelector(state => state.mode)

  if (mode === 'victory') return (<div className="victory">This guy is now dead.</div>)

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