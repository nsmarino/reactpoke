import React, { useEffect } from 'react'

import { useSelector, } from 'react-redux'

const Victory = () => {
//   const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='victory') {
      console.log('handling victory')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default Victory