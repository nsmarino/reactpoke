import React from 'react'
import { useSelector } from 'react-redux'

import Status from './Status'

const Enemy = () => {
  const enemy = useSelector(state => state.enemy)
  const stage = useSelector(state => state.stage)

  if (stage === 'victory') return null

  return (
    <div className="enemyContainer">
      <Status pokemon={enemy} /> 
      <div style={enemy.sprite}></div>
    </div>
  )
}

export default Enemy