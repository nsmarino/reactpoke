import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import './App.css';

import StageHandlers from './components/stageHandlers';
import EnemyStatus from './components/EnemyStatus'
import EnemySprite from './components/EnemySprite'
import PlayerSprite from './components/PlayerSprite'
import PlayerStatus from './components/PlayerStatus'
import TextBox from './components/TextBox'

import NewTextBox from './components/NewTextBox'
import ActionTest from './components/ActionTest'

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
      <NewTextBox />
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
    <ActionTest />
  </div>
  );
}

export default App;

// textHandler - idea would be an array of text strings in store.
// array is added to programmatically.
// clickHandler will check length of array. if there are multiple
// strings in array it will advance index on each click. if it is
// the last string, it will advance stage.
// click handler would be activated, along with blinking arrow,
// once text-scroll animation was completed

// actionHandler - after player or enemy decides, the handler will
// then run a series of probabilities and checks (against pokemon type,
// for example) to determine whether attack hit or missed, how effective
// it was, critical hit, etc. this action object will then be
// added to the store with some booleans? the text handler will receive
// from it the relevant strings to display to player. so from this i
// know that the textHandler needs to be implemented first.


// i feel its currently a problem how dispatches and handlers are scattered
// among different types of components. specifically, is there a better place
// for handling action object than the ActionBox component?
