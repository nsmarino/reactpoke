import React from 'react';
import './App.css';

import TextBox from './components/TextBox'
import Player from './components/Player'
import Enemy from './components/Enemy'

import { useSelector, useDispatch } from 'react-redux'

import { 
  enemyPresent,
  playerDecide,
  playerAction,
  playerEffect,
  enemyDecide, 
  enemyAction, 
  enemyEffect, 
  victory, 
  defeat, 
} from './reducers/stageReducer'

import StageHandlers from './components/stageHandlers';


function App() {
  const state = useSelector(state => state)
  console.log(state)

  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <StageHandlers />
      
      <div className='battleContainer'>
        <Enemy />
        <Player />
      </div>
      
      <TextBox />

      <div className='testBtns'>
        <button onClick={() => dispatch(enemyPresent())}>ENEMY PRESENTATION</button>
        <button onClick={() => dispatch(playerDecide())}>PLAYER DECIDE</button>
        <button onClick={() => dispatch(playerAction())}>PLAYER ACTION</button>
        <button onClick={() => dispatch(playerEffect())}>PLAYER EFFECT</button>
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
