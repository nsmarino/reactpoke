import React from 'react'
import { useSelector } from 'react-redux'

import Health from './Health'
import XP from './XP'
import Connector from './Connector'

const PlayerStatus = ({pokemon}) => {
  const stage = useSelector(state => state.stage)
  // const player = useSelector(state => state.player)

  // CSS code is EXTREMELY messy. Refactor using Styled Components.

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
  const testStyle = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'flex-end'
  }

  // FIX IF REUSING FOR ENEMYSTATUS
  if (stage === 'victory') return null

  return (
  <div>

    <h1 style={nameStyle}>{pokemon.name}</h1>
    <p style={levelStyle}>:L{pokemon.level} {pokemon.gender}</p>

    {/* big flexbox */}
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <div style={testStyle}>
        <div className="hpBar" style={{display: 'flex'}}>
      <h2 style={hpStyle}>HP:</h2>
      <div style={barStyle}>
        <Health parent={pokemon}/>
      </div>
    </div>
        <p>{pokemon.currentHealth}/ {pokemon.health}</p>
        <XP pokemon={pokemon}/>
      </div>
      <Connector />
    </div>

  </div> 
  )
}

export default PlayerStatus

// conditional rendering if same status component is ultimately
// used for both player and enemy
// {
//     pokemon === player && <div>
//       <p>{pokemon.currentHealth}/ {pokemon.health}</p>
//         <XP pokemon={pokemon}/>
//       </div>
//   }