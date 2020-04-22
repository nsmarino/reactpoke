import React from 'react';
import styled from 'styled-components';

import Triangle from './Triangle'

const XPContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 3px solid black;
  border-right: 9px solid black;
  width: 125px;
  height: 12px;
`

const StyledXP = styled.div.attrs(props => ({
    width: props.width,
 }))`
   height: 5px;
   width: ${props=>props.width}px;
   transition: width 2s;
   background-color: #0892D0;
   &:hover {
     width: 50px;
   }
 `;

const XP = ({pokemon}) => {

  const percentXP = (pokemon.xp * 100) / pokemon.xpNeeded


  return (
    <div style={{display: 'flex', alignItems: 'flex-end'}}>
      <Triangle shape='10px 18px 0px 0px' />
      <XPContainer>
        <StyledXP width={percentXP} />
      </XPContainer>
    </div>
  )
}

export default XP