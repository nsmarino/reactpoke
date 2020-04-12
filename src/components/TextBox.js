import React from 'react'
import { useSelector } from 'react-redux'


const TextBox = () => {
  const text = useSelector(state => state.text)
    return (
      <div>
        {text}
      </div>
    )
  }

export default TextBox