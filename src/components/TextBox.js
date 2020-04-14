import React from 'react'
import { useSelector } from 'react-redux'


const TextBox = () => {
  const text = useSelector(state => state.text)
  const moveBox = useSelector(state => state.player.moveset)
  
    return (
      <div className="textContainer">
        <div>{text}</div>
        <button className="blinker">next</button>
      </div>
    )
  }

export default TextBox