import React from 'react';
import styled from 'styled-components';

const StyledHealth = styled.div.attrs(props => ({
    width: props.width,
    color: props.color, 
 }))`
   height: 5px;
   width: ${props=>props.width}px;
   transition: width 2s, background-color 2s;
   background-color: ${props=>props.color};
 `

const Health = ({parent}) => {

  const percentHealth = (parent.currentHealth * 100) / parent.health
  let color = percentHealth > 40 ? 'green' : 'orange'
  if (percentHealth < 20) color = 'red'

  return (
    <StyledHealth width={percentHealth} color={color} />
  )
}

export default Health