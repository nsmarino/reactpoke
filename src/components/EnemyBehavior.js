import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { updateBehavior } from '../reducers/behaviorReducer'
import { enemyTurn } from '../reducers/stageReducer'

const EnemyBehavior = () => {
  const dispatch = useDispatch()

  const behavior = useSelector(state => state.behavior)
  
  const stage = useSelector(state => state.stage)
  
  console.log('still alive')
  useEffect(() => {
    if (stage==='enemyTurn') {
      console.log('handling enemy behavior')
      dispatch(updateBehavior('enemy used attack'))
      setTimeout(() => dispatch(updateBehavior('attack was successful')), 1500)
    } // eslint-disable-next-line
  }, [stage])

  const showBehavior = () => behavior.map(b => <p key={b}>{b}</p>)

  const testBehavior = () => {
    dispatch(enemyTurn())
  }

  return null
  // return (
  //     <div>
  //       <button onClick={testBehavior}>test behavior</button>
  //       {showBehavior()}
  //     </div>
  // )
}

export default EnemyBehavior