// #region imports
import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import './App.css';
// components
import EnemyStatus from './components/status displays/EnemyStatus'
import EnemySprite from './components/sprites/EnemySprite'
import PlayerSprite from './components/sprites/PlayerSprite'
import PlayerStatus from './components/status displays/PlayerStatus'
import NewTextBox from './components/textbox/NewTextBox'
// reducers
import {enemyAppear, enemyPresent,playerDecide,playerAction,playerEffect,enemyDecide, enemyAction, enemyEffect, victory, defeat, 
} from './reducers/stageReducer'
// styles
import ContainerDiv from './styles/ContainerDiv'

import useStageHandler from './components/useStageHandler'
// //#endregion

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)

  useStageHandler()

  return (
  <div className="App">

    <ContainerDiv>

      <div className="animation"></div>

      <EnemyStatus />
      <EnemySprite />

      <PlayerSprite />
      <PlayerStatus />

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
  </div>
  );
}

export default App;


// i feel its currently a problem how dispatches and handlers are scattered
// among different types of components. specifically, is there a better place
// for handling action object than the ActionBox component?

// i want to refunction all the "useEffect" fake components into handlers that
// are called by a single effect hook at the app level. this would free me of 
// a lot of fake-react code...how then do i handle the animations?

// there is only ever one animation at a time so they could all be applied
// as class on same empty div in App component. upon animationEnd the class
// would be removed and it would be passed to the next stage, which would 
// fill the div with a new animation as necessary.

// Next Steps:
// ONLY change stages on click events for now (simplified for sanity)
// Refactor "stageHandler" components into functions called by App effect hook
// Refactor animations into classes (or style attr?) on empty div in App (S.C.?)
// Finetune implementation of Action Handler and remove old code.

// finetune action reducer
