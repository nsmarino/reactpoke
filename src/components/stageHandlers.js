import React from 'react'
import EnemyDecide from './handlers/enemyDecide'
import EnemyAction from './handlers/enemyAction'

const handlerContainer = () => {
    return (
      <div>
        <EnemyDecide />
        <EnemyAction />
      </div>
    )
}

export default handlerContainer