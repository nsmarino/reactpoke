import React, { useEffect } from 'react'

import { useSelector, } from 'react-redux'

const PlayerAction = () => {
//   const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  
  useEffect(() => {
    if (stage==='playerAction') {
      console.log('handling player action')
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default PlayerAction