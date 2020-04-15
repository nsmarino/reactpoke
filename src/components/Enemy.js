import React from 'react'
import { useSelector } from 'react-redux'

import EnemyStatus from './EnemyStatus'

const Enemy = () => {
  const enemy = useSelector(state => state.enemy)
  const stage = useSelector(state => state.stage)

  if (stage === 'victory') return null

  return (
    <div className="enemyContainer">
      <EnemyStatus /> 
      <div style={enemy.sprite}></div>
    </div>
  )
}

export default Enemy