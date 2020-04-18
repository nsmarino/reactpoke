import React from 'react'

import EnemyAppear from './handlers/enemyAppear'
import EnemyPresent from './handlers/enemyPresent'

import PlayerDecide from './handlers/playerDecide'
import PlayerAction from './handlers/playerAction'
import PlayerEffect from './handlers/playerEffect'

import EnemyDecide from './handlers/enemyDecide'
import EnemyAction from './handlers/enemyAction'
import EnemyEffect from './handlers/enemyEffect'

import Victory from './handlers/victory'
import Defeat from './handlers/defeat'

const handlerContainer = () => {
    return (
      <div>
        <EnemyAppear />
        <EnemyPresent />

        <PlayerDecide />
        <PlayerAction />
        <PlayerEffect />

        <EnemyDecide />
        <EnemyAction />
        <EnemyEffect />

        <Victory />
        <Defeat />
        
      </div>
    )
}

export default handlerContainer