import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

// import pokemonSprites from '../../assets/pokemonSprites.png'

// const PlayerSpriteImg = styled.img.attrs(props => ({
//   spritePosition: props.spritePosition,
// }))`
//   object-fit: none;
//   object-position: ${props=>props.spritePosition};
//   background-size
//   width: 100px;
//   height: 100px;
//   position: absolute;
//   left: 3em;
//   top: 11em;
// `

const PlayerSpriteImg = styled.img`
  width: 100px;
  height: 100px;
  image-rendering: pixelated;
  position: absolute;
  left: 3em;
  top: 11em;
`

const PlayerSprite = () => {
  const player = useSelector(state => state.player)

  return (
    <PlayerSpriteImg 
      src={player.spriteBack} 
      alt={`${player.name}`} 
      spritePosition={player.spritePosition}
    />
  )
}

export default PlayerSprite