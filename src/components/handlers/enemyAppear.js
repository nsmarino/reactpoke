import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { enemyPresent } from '../../reducers/stageReducer'

const EnemyAppear = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)

  const handleAnimationEnd = (sprite) => {
    sprite.classList.remove('slide')
    dispatch(enemyPresent())
  }

  useEffect(() => {
    if (stage==='enemyAppear') {
      const enemySprite = document.querySelector('.enemySprite')
      enemySprite.classList.add('slide')
      enemySprite.addEventListener('animationend', () => handleAnimationEnd(enemySprite)) 
    } // eslint-disable-next-line
  }, [stage])

  return (
    <></>
  )
}

export default EnemyAppear