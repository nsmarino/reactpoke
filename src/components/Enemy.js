import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import spaceworld from '../assets/spaceworld.png'

import Status from './EnemyStatus'

const EnemyDiv = styled.div`
border: 1px solid red;
position: relative;
font-family: sans-serif;
align-items: flex-start;
`

const EnemySprite = styled.div.attrs(props => ({
  spritePosition: props.spritePosition,
}))`
  border: 1px solid red;
  width: 100px;
  height: 100px;
  background: url(${spaceworld});
  background-position: ${props=>props.spritePosition};
  position: absolute;
  left: 15em;
  top: -3em;
`

const Enemy = () => {
  const enemy = useSelector(state => state.enemy)
  const stage = useSelector(state => state.stage)
  if (stage === 'victory') return null

  return (
    <EnemyDiv>
      <Status pokemon={enemy} />
      <EnemySprite spritePosition={enemy.spritePosition} className="enemySprite"></EnemySprite>
      {/* <div className="enemySprite" style={enemy.sprite}></div> */}
    </EnemyDiv>
  )
}

export default Enemy