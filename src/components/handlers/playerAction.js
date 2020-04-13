import React, { useEffect } from 'react'

import { useSelector, useDispatch} from 'react-redux'
import { updateText } from '../../reducers/textReducer'
import { playerEffect } from '../../reducers/stageReducer'

const PlayerAction = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const player = useSelector(state => state.player)
  const action = useSelector(state => state.action)
  
  useEffect(() => {
    if (stage==='playerAction') {
      console.log('handling player action')
      dispatch(updateText(`${player.name} used ${action.title}`))
      setTimeout(() => dispatch(playerEffect()), 3000)
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default PlayerAction