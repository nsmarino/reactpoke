import React, { useEffect } from 'react'

import { useSelector, useDispatch} from 'react-redux'
// import { updateText } from '../../reducers/textReducer'
import { setEnemyAction } from '../../reducers/actionReducer'

import roll from '../../utils/roll'

const EnemyDecide = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const enemy = useSelector(state => state.enemy)

  const enemyDecision = () => {
    const rolled = roll()   
    const action = rolled > 50 ? enemy.moveset[0] : enemy.moveset[1]
    dispatch(setEnemyAction(action))
  }

  useEffect(() => {
    if (stage==='enemyDecide') {
      enemyDecision()
      // dispatch(setEnemyAction(defaultEnemyAction))
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyDecide