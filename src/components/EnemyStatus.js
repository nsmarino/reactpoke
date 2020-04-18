import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Health from './Health'
import PokeHeader from '../styles/PokeHeader'
import HPBarDiv from '../styles/HPBarDiv'

const EnemyStatusDiv = styled.div`
  position: absolute;
  left: 3em;
  top: 3em;
` 

const EnemyStatus = () => {
  const stage = useSelector(state => state.stage)
  const enemy = useSelector(state => state.enemy)

  if (stage === 'victory' || stage === 'enemyAppear') return null

  return (
  <EnemyStatusDiv>     
      <PokeHeader>
        <h1>{enemy.name}</h1>
        <p>:L{enemy.level} {enemy.gender}</p>
      </PokeHeader>    
    <HPBarDiv>
    <h2>HP:</h2>
    <div className='bar'>
        <Health parent={enemy}/>
    </div>
    </HPBarDiv>
  </EnemyStatusDiv> 
  )
}

export default EnemyStatus