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


// stack overflow -- animate Value
// function animateValue(id, start, end, duration) {
//   // assumes integer values for start and end
  
//   var obj = document.getElementById(id);
//   var range = end - start;
//   // no timer shorter than 50ms (not really visible any way)
//   var minTimer = 50;
//   // calc step time to show all interediate values
//   var stepTime = Math.abs(Math.floor(duration / range));
  
//   // never go below minTimer
//   stepTime = Math.max(stepTime, minTimer);
  
//   // get current time and calculate desired end time
//   var startTime = new Date().getTime();
//   var endTime = startTime + duration;
//   var timer;

//   function run() {
//       var now = new Date().getTime();
//       var remaining = Math.max((endTime - now) / duration, 0);
//       var value = Math.round(end - (remaining * range));
//       obj.innerHTML = value;
//       if (value == end) {
//           clearInterval(timer);
//       }
//   }
  
//   timer = setInterval(run, stepTime);
//   run();
// }

// animateValue("value", 100, 25, 5000);