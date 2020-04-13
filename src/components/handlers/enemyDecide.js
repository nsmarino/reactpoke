import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateBehavior } from '../reducers/behaviorReducer'

const enemyDecide = () => {
  const dispatch = useDispatch()

  const mode = useSelector(state => state.mode)
  
  console.log('still alive')
  useEffect(() => {
    if (mode==='enemyTurn') {
      console.log('handling enemy behavior')
    //   dispatch(updateBehavior('enemy used attack'))
    //   setTimeout(() => dispatch(updateBehavior('attack was successful')), 1500)
    } // eslint-disable-next-line
  }, [mode])

  return null
}

export default enemyDecide