import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

const EnemyAction = () => {
//   const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='enemyAction') {
      console.log('handling enemy action')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyAction