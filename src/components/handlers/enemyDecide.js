import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
// import { updateBehavior } from '../reducers/behaviorReducer'

const EnemyDecide = () => {
  // const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='enemyDecide') {
      console.log('handling enemy behavior')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyDecide