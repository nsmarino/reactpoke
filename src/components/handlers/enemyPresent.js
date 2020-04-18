import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../../reducers/textReducer'

const EnemyPresent = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const enemyName = useSelector(state => state.enemy.name)

  useEffect(() => {
    if (stage==='enemyPresent') {
      // const testEnemy = document.querySelector('.enemyContainer')
      // testEnemy.classList.add('enemyPresent')
      // console.log(testEnemy)
      dispatch(updateText(`Wild ${enemyName.toUpperCase()} appeared!`))
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyPresent