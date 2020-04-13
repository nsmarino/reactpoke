import React, { useEffect } from 'react'

import { useSelector, useDispatch} from 'react-redux'
import { updateText } from '../../reducers/textReducer'
import { setEnemyAction } from '../../reducers/actionReducer'



const EnemyDecide = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const defaultEnemyAction = useSelector(state => state.enemy.moveset[0])
  
  useEffect(() => {
    if (stage==='enemyDecide') {
      console.log('handling enemy decide')
      dispatch(updateText('enemy is now thinking'))
      dispatch(setEnemyAction(defaultEnemyAction))
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyDecide