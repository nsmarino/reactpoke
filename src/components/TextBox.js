import React from 'react'
import { useSelector } from 'react-redux'


const TextBox = () => {
  const text = useSelector(state => state.text)
    return (
      <div className="textContainer">
        <div>{text}</div>
        <button>next</button>
      </div>
    )
  }

export default TextBox