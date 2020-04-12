import React from 'react';
import './App.css';

import TextBox from './components/TextBox'
import Player from './components/Player'
import Enemy from './components/Enemy'

import { useSelector } from 'react-redux'
import EnemyBehavior from './components/EnemyBehavior';


function App() {
  const state = useSelector(state => state)
  console.log(state)
  
  return (
    <div className="App">
      
      <TextBox />
      <div className='battleContainer'>
        <Player />
        <Enemy />
        <EnemyBehavior />
      </div>
    </div>
  );
}

export default App;

// using dispatch:
// <button onClick={()=>dispatch(updateText('new guy'))}>add</button>
// <button onClick={()=>dispatch(clearText())}>clear</button>
