import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../../reducers/textReducer'

import { updatePlayerHealth } from '../../reducers/playerReducer'
import { playerDecide, defeat } from '../../reducers/stageReducer'


const EnemyEffect = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const player = useSelector(state => state.player)
  const action = useSelector(state => state.action)

  
  useEffect(() => {
    if (stage==='enemyEffect') {
      console.log('handling enemy effect')
      dispatch(updateText(`${action.title} struck for ${action.damage} damage`))
      const newPlayerHealth = player.currentHealth - action.damage
      if (newPlayerHealth===0) dispatch(defeat())

      else {
        dispatch(updatePlayerHealth(newPlayerHealth))
        setTimeout(() => dispatch(playerDecide()), 3000)
      }

    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyEffect