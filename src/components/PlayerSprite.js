import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import spaceworld from '../assets/spaceworld.png'

const PlayerSpriteDiv = styled.div.attrs(props => ({
  spritePosition: props.spritePosition,
}))`
  width: 100px;
  height: 100px;
  background: url(${spaceworld});
  background-position: ${props=>props.spritePosition};
  position: absolute;
  left: 3em;
  top: 11em;
`

const PlayerSprite = () => {
  const player = useSelector(state => state.player)

  return (
      <PlayerSpriteDiv spritePosition={player.spritePosition}className="playerSprite"></PlayerSpriteDiv>
  )
}

export default PlayerSprite