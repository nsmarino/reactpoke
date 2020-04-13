import React from 'react';
import './App.css';

import TextBox from './components/TextBox'
import Player from './components/Player'
import Enemy from './components/Enemy'

import { useSelector, useDispatch } from 'react-redux'

import { enemyDecide, enemyAction, enemyEffect, victory, defeat } from './reducers/stageReducer'
import StageHandlers from './components/stageHandlers';


function App() {
  const state = useSelector(state => state)
  console.log(state)

  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <StageHandlers />
      <TextBox />

      <div className='battleContainer'>
        <Player />
        <Enemy />
      </div>

      <div className='testBtns'>
        {/* <button onClick={() => dispatch(enemyTurn())}>ENEMY PRESENTATION</button>
        <button onClick={() => dispatch(enemyTurn())}>PLAYER DECIDE</button>
        <button onClick={() => dispatch(enemyTurn())}>PLAYER ACTION</button>
        <button onClick={() => dispatch(enemyTurn())}>PLAYER ACTION EFFECT</button> */}
        <button onClick={() => dispatch(enemyDecide())}>ENEMY DECIDE</button>
        <button onClick={() => dispatch(enemyAction())}>ENEMY ACTION</button>
        <button onClick={() => dispatch(enemyEffect())}>ENEMY EFFECT</button>
        <button onClick={() => dispatch(victory())}>VICTORY</button>
        <button onClick={() => dispatch(defeat())}>DEFEAT</button>

      </div>
    </div>
  );
}

export default App;

// using dispatch:
// <button onClick={()=>dispatch(updateText('new guy'))}>add</button>
// <button onClick={()=>dispatch(clearText())}>clear</button>

// STEPS:
// set up each distinct stage of combat
// refactor enemy behavior into own component if possible
// create dispatchers for changing each combat stage
// create useEffect handlers for combat stages
// code organization/refactoring

// ENEMY PRESENTATION

// loop until enemy hp is 0:
//   PLAYER DECIDE
//   PLAYER ACTION
//   PLAYER ACTION EFFECT
//   ENEMY DECIDE
//   ENEMY ACTION
//   ENEMY ACTION EFFECT

// PLAYER VICTORY
