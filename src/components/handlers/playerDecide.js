import React, { useEffect } from 'react'

import { useSelector, } from 'react-redux'

const PlayerDecide = () => {
//   const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='playerDecide') {
      console.log('handling player decide')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default PlayerDecide