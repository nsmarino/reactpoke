import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import spaceworld from '../../assets/spaceworld.png'

const EnemySpriteImg = styled.img.attrs(props => ({
  spritePosition: props.spritePosition,
}))`
  object-fit: none;
  object-position: ${props=>props.spritePosition};
  width: 100px;
  height: 100px;
  position: absolute;
  left: 16em;
  top: 1em;
`

const EnemySprite = () => {
  const enemy = useSelector(state => state.enemy)
  const stage = useSelector(state => state.stage)
  if (stage === 'victory') return null

  return (
    <EnemySpriteImg 
      src={spaceworld} 
      alt={`${enemy.name}`} 
      spritePosition={enemy.spritePosition} 
      className="enemySprite"
    />
  )
}

export default EnemySprite