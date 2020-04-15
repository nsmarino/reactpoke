import React from 'react'
import { useSelector } from 'react-redux'

import Health from './Health'

const EnemyStatus = () => {
  const enemy = useSelector(state => state.enemy)
  const stage = useSelector(state => state.stage)

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
      borderBottom: '3px solid black',
      borderRight: '9px solid black',
      width: '100px',
      height: '.75em',
  }

  if (stage === 'victory') return null

  return (
      <div>
    <h1 style={nameStyle}>{enemy.name}</h1>
    <p style={levelStyle}>:L{enemy.level} {enemy.gender}</p>
    <div style={{display: 'flex'}}>
    <h2 style={hpStyle}>HP:</h2>
    <div style={barStyle}>
        <Health parent={enemy}/>
      {/* <div style={healthStyle}></div>     */}
    </div>
    </div>
  </div> 
  )
}

export default EnemyStatus