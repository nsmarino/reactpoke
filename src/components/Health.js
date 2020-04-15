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
  let color = parent.currentHealth > 50 ? 'green' : 'orange'

  if (parent.currentHealth < 30) color = 'red'

  return (
    <StyledHealth width={parent.currentHealth} color={color} />
  )
}

export default Health