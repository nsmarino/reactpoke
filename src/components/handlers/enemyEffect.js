import React, { useEffect } from 'react'

import { useSelector, } from 'react-redux'

const EnemyEffect = () => {
//   const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='enemyEffect') {
      console.log('handling enemy effect')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyEffect