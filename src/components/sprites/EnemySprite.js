import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

// import chikoritaFront from '../../assets/chikoritaFront.png'

// const EnemySpriteImg = styled.img.attrs(props => ({
//   spritePosition: props.spritePosition,
// }))`
//   object-fit: none;
//   object-position: ${props=>props.spritePosition};
//   width: 100px;
//   height: 100px;
//   position: absolute;
//   left: 16em;
//   top: 1em;
// `

const EnemySpriteImg = styled.img`
  width: 80px;
  height: 80px;
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
      src={enemy.spriteFront} 
      alt={`${enemy.name}`} 
      /* spriteFront={enemy.spriteFront}  */
      className="enemySprite"
    />
  )
}

export default EnemySprite