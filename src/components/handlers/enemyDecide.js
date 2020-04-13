import React, { useEffect } from 'react'

import { useSelector, } from 'react-redux'
// import { updateBehavior } from '../reducers/behaviorReducer'

const EnemyDecide = () => {
  // const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='enemyDecide') {
      console.log('handling enemy decide')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyDecide