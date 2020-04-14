import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../../reducers/textReducer'


const EnemyPresent = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const enemyName = useSelector(state => state.enemy.name)

  useEffect(() => {
    if (stage==='enemyPresent') {
      console.log('handling enemy present')
      dispatch(updateText(`Look out, it's ${enemyName}`))
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyPresent