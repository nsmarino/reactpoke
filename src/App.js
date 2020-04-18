import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import './App.css';

import StageHandlers from './components/stageHandlers';
import EnemyStatus from './components/EnemyStatus'
import EnemySprite from './components/EnemySprite'
import PlayerSprite from './components/PlayerSprite'
import PlayerStatus from './components/PlayerStatus'
import TextBox from './components/TextBox'

import ContainerDiv from './styles/ContainerDiv'

import {
  enemyAppear, 
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

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)

  return (
    <div className="App">

    <ContainerDiv>
      <StageHandlers />
      <EnemyStatus />
      <EnemySprite />
      <PlayerSprite />
      <PlayerStatus />
      <TextBox />
    </ContainerDiv>
      <div className='testBtns' style={{display:'flex', flexDirection: 'column'}}>
        <button onClick={() => dispatch(enemyAppear())}>Enemy appears</button>
        <button onClick={() => dispatch(enemyPresent())}>Enemy presents itself</button>
        <button onClick={() => dispatch(playerDecide())}>Player makes decision</button>
        <button onClick={() => dispatch(playerAction())}>Player action is shown</button>
        <button onClick={() => dispatch(playerEffect())}>Effect of action is shown</button>
        <button onClick={() => dispatch(enemyDecide())}>Enemy makes decision</button>
        <button onClick={() => dispatch(enemyAction())}>Enemy action is shown</button>
        <button onClick={() => dispatch(enemyEffect())}>Effect of enemy action is shown</button>
        <button onClick={() => dispatch(victory())}>Player victory</button>
        <button onClick={() => dispatch(defeat())}>Player is defeated</button>
      </div>

    </div>
  );
}

export default App;
