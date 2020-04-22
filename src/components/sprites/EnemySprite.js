import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const EnemySpriteImg = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  image-rendering: pixelated;
  left: 16em;
  top: 1em;
`

const EnemySprite = () => {
  const enemy = useSelector(state => state.enemy)
  const stage = useSelector(state => state.stage)
  if (stage === 'victory') return null

  return (
    <EnemySpriteImg 
      src={enemy.spriteFront} 
      alt={`${enemy.name}`} 
      className="enemySprite"
    />
  )
}

export default EnemySprite