import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { playerAction } from '../reducers/stageReducer'
import { setPlayerAction } from '../reducers/actionReducer'

const MoveBox = () => {
  const dispatch = useDispatch()
  const moves = useSelector(state => state.player.moveset)

  const handleMove = (move) => {
    dispatch(setPlayerAction(move))
    dispatch(playerAction()) 
  }

  const displayMoves = () => {
    return moves.map(move => 
      <button 
        key={move.title} 
        onClick={() => handleMove(move)}>
          {move.title}
      </button>)
  }
    return (
      <div className="movesContainer">
        {displayMoves()}
        {/* <button className="blinker">next</button> */}
      </div>
    )
  }

export default MoveBox