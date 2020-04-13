import React, { useEffect } from 'react'

import { useSelector, } from 'react-redux'

const EnemyPresent = () => {
//   const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='enemyPresent') {
      console.log('handling enemy present')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyPresent