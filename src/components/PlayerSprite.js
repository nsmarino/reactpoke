import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import spaceworld from '../assets/spaceworld.png'

const PlayerSpriteImg = styled.img.attrs(props => ({
  spritePosition: props.spritePosition,
}))`
  object-fit: none;
  object-position: ${props=>props.spritePosition};
  width: 100px;
  height: 100px;
  position: absolute;
  left: 3em;
  top: 11em;
`

const PlayerSprite = () => {
  const player = useSelector(state => state.player)

  return (
    <PlayerSpriteImg 
      src={spaceworld} 
      alt={`${player.name}`} 
      spritePosition={player.spritePosition}
    />
  )
}

export default PlayerSprite