import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Health from './Health'
import XP from './XP'
import Connector from './Connector'

import PokeHeader from '../styles/PokeHeader'
import HPBarDiv from '../styles/HPBarDiv'
import HPNumeric from '../styles/HPNumeric'

const PlayerStatusDiv = styled.div`
  position: absolute;
  left: 13em;
  top: 10em;
  display: flex;
  align-items: flex-end;
`

const PlayerStatus = () => {
  const player = useSelector(state => state.player)

  return (
    <PlayerStatusDiv>
    <div style={{display: 'flex', flexDirection: 'column',alignItems: 'flex-end',}}>   
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <PokeHeader>
        <h1>{player.name}</h1>
        <p>:L{player.level} {player.gender}</p>
      </PokeHeader>
        <HPBarDiv>
        <h2>HP:</h2>
        <div className='bar'>
          <Health parent={player}/>
        </div>
      </HPBarDiv>
      </div>
      <HPNumeric>{player.currentHealth}/ {player.health}</HPNumeric>
      <XP pokemon={player}/>
    </div>
    <Connector />
    </PlayerStatusDiv>
  )
}

export default PlayerStatus