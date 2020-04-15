import React, { useEffect } from 'react'

import { useSelector, useDispatch} from 'react-redux'
import { updateText } from '../../reducers/textReducer'
import { setEnemyAction } from '../../reducers/actionReducer'

const EnemyDecide = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const enemy = useSelector(state => state.enemy)
  const defaultEnemyAction = enemy.moveset[0]
  
  useEffect(() => {
    if (stage==='enemyDecide') {
      dispatch(updateText(`${enemy.name} is now thinking...`))
      dispatch(setEnemyAction(defaultEnemyAction))
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyDecide