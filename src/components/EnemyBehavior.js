import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { updateBehavior } from '../reducers/behaviorReducer'
import { enemyTurn } from '../reducers/modeReducer'

const EnemyBehavior = () => {
  const dispatch = useDispatch()

  const behavior = useSelector(state => state.behavior)
  
  const mode = useSelector(state => state.mode)

  useEffect(() => {
    if (mode==='enemyTurn') {
      dispatch(updateBehavior('enemy used attack'))
      setTimeout(() => dispatch(updateBehavior('attack was successful')), 1500)
    }
  }, [mode])

  const showBehavior = () => behavior.map(b => <p key={b}>{b}</p>)

  const testBehavior = () => {
    dispatch(enemyTurn())
  }


  return (
      <div>
        <button onClick={testBehavior}>test behavior</button>

        {showBehavior()}
      </div>
  )
}

export default EnemyBehavior