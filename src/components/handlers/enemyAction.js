import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../../reducers/textReducer'
import { enemyEffect } from '../../reducers/stageReducer'

const EnemyAction = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const enemy = useSelector(state => state.enemy)
  const action = useSelector(state => state.action)

  useEffect(() => {
    if (stage==='enemyAction') {
      console.log('handling enemy action')
      dispatch(updateText(`${enemy.name} used ${action.title}`))
      setTimeout(() => dispatch(enemyEffect()), 3000)
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyAction