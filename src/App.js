// #region Imports
    import React from 'react';
    import { useSelector, useDispatch} from 'react-redux'
    import './App.css';

  // custom hooks:
    import useStageHandler from './hooks/useStageHandler'

  // components:
    import EnemyStatus from './components/status displays/EnemyStatus'
    import EnemySprite from './components/sprites/EnemySprite'
    import PlayerSprite from './components/sprites/PlayerSprite'
    import PlayerStatus from './components/status displays/PlayerStatus'
    import NewTextBox from './components/textbox/NewTextBox'

  // reducers:
    import {enemyAppear, enemyPresent,playerDecide,playerAction,playerEffect,enemyDecide, enemyAction, enemyEffect, victory, defeat, 
    } from './reducers/stageReducer'

  // styles:
    import ContainerDiv from './styles/ContainerDiv'
// //#endregion

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)

  // Custom hook handles side effects of stage change. 
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

// Right now ALL STAGE TRANSITIONS are handled by click except victory/defeat
// Now:
// 1. handle animations using empty div with class 'animation' (styled components?)

// Next Steps:
// 1.Finetune implementation of Action Handler
// 2. finetune action reducer ( currently both playerAction and enemyAction occupy
// the same slot -- should they?)
