import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../../reducers/textReducer'


const PlayerDecide = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const playerName = useSelector(state => state.player.name)
  
  useEffect(() => {
    if (stage==='playerDecide') {
      console.log('handling player decide')
      dispatch(updateText(`What should ${playerName} do?`))
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default PlayerDecide