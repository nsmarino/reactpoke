import React from 'react'
import { useSelector } from 'react-redux'

import Health from './Health'
import XP from './XP'

const Status = ({pokemon}) => {
  const stage = useSelector(state => state.stage)
  const player = useSelector(state => state.player)

  const nameStyle = {
     textTransform: `uppercase`,
     fontSize: `1em`,
     fontFamily: `sans-serif`,
     fontWeight: `100`,
     margin: `0`
  }
  const levelStyle = {
      margin: `0`,
      marginLeft: `4em`,
  }
  const hpStyle = {
    fontSize: `.75em`,
    fontWeight: `bold`,
    color: `goldenrod`,
    background: `black`,
    margin: `0em`, 
    width: `2em`,
  }
  const barStyle = {
      display: 'flex',
      alignItems: 'center',
      //justifyContent: 'flex-end',
      borderBottom: '3px solid black',
      borderRight: '9px solid black',
      width: '100px',
      height: '.75em',
  }
  // FIX TO UNIVERSALIZE
  if (stage === 'victory') return null

  return (
      <div>
    <h1 style={nameStyle}>{pokemon.name}</h1>

    <p style={levelStyle}>:L{pokemon.level} {pokemon.gender}</p>
    <div style={{display: 'flex'}}>
    <h2 style={hpStyle}>HP:</h2>
    <div style={barStyle}>
        <Health parent={pokemon}/>
    </div>
    </div>
    {
      pokemon === player && <div>
        <p>{pokemon.currentHealth}/ {pokemon.health}</p>
          <XP pokemon={pokemon}/>
        </div>
    }
  </div> 
  )
}

export default Status