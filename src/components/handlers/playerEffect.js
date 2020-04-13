import React, { useEffect } from 'react'

import { useSelector, } from 'react-redux'

const PlayerEffect = () => {
//   const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='playerEffect') {
      console.log('handling player effect')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default PlayerEffect