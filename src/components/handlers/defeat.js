import React, { useEffect } from 'react'

import { useSelector, } from 'react-redux'

const Defeat = () => {
//   const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='defeat') {
      console.log('handling defeat')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default Defeat