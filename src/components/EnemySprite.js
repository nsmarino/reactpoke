import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import spaceworld from '../assets/spaceworld.png'

const EnemySpriteDiv = styled.div.attrs(props => ({
  spritePosition: props.spritePosition,
}))`
  width: 100px;
  height: 100px;
  background: url(${spaceworld});
  background-position: ${props=>props.spritePosition};
  position: absolute;
  left: 16em;
  top: 1em;
`

const EnemySprite = () => {
  const enemy = useSelector(state => state.enemy)
  const stage = useSelector(state => state.stage)
  if (stage === 'victory') return null

  return (
      <EnemySpriteDiv spritePosition={enemy.spritePosition} className="enemySprite"></EnemySpriteDiv>
  )
}

export default EnemySprite