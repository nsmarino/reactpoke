import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { playerAction } from '../reducers/stageReducer'
import { setPlayerAction } from '../reducers/actionReducer'


const ActionMenuDiv = styled.div`
width: 15em;
height: calc(100%);
margin: -4px -4px 0px 0px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
border-style: double;
border-width: 4px;
border-radius: 5px;
padding-left: .5em;
background-color: white;
> p {
  padding: 0;
  margin: 0;
}

`

const MoveButton = styled.button`
  border: 0;
  padding: 0;
  font-size: 1.1em;
  background: white;
  text-transform: uppercase;
  &:hover {
    background: lightgrey;
  }
`


const MoveBox = () => {
  const dispatch = useDispatch()
  const moves = useSelector(state => state.player.moveset)
  console.log(moves)
  const handleMove = (move) => {
    dispatch(setPlayerAction(move))
    dispatch(playerAction()) 
  }

  return (
    <ActionMenuDiv>
      {moves[0] ? <MoveButton onClick={() => handleMove(moves[0])}>{moves[0].title}</MoveButton> : <p> —</p>}
      {moves[1] ? <MoveButton onClick={() => handleMove(moves[1])}>{moves[1].title}</MoveButton> : <p> —</p>}
      {moves[2] ? <MoveButton onClick={() => handleMove(moves[2])}>{moves[2].title}</MoveButton> : <p> —</p>}
      {moves[3] ? <MoveButton onClick={() => handleMove(moves[3])}>{moves[3].title}</MoveButton> : <p> —</p>}
    </ActionMenuDiv>
  )
}

export default MoveBox