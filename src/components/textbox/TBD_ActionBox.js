// // libraries
// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import styled from 'styled-components'
// // reducers
// import { playerAction } from '../reducers/stageReducer'
// import { setPlayerAction } from '../reducers/actionReducer'
// // styles
// const TopMenuDiv = styled.div`
// width: 15em;
// height: calc(100%);
// margin: -4px -4px 0px 0px;
// display: flex;
// flex-wrap: wrap;
// align-content: stretch;
// height: 100%;
// border-style: double;
// border-width: 4px;
// border-radius: 5px;
// padding-left: .5em;
// background-color: white;
// > * {
//   width: 50%;
// }
// `
// const FightMenuDiv = styled.div`
// width: 15em;
// height: calc(100%);
// margin: -4px -4px 0px 0px;
// display: flex;
// flex-direction: column;
// justify-content: space-evenly;
// align-items: flex-start;
// border-style: double;
// border-width: 4px;
// border-radius: 5px;
// padding-left: .5em;
// background-color: white;
// > p {
//   padding: 0;
//   margin: 0;
// }

// `
// const ActionButton = styled.button`
//   border: 0;
//   padding: 0;
//   font-size: 1.1em;
//   background: white;
//   text-transform: uppercase;
//   &:hover {
//     background: lightgrey;
//   }
// `

// const ActionBox = () => {
//   const [currentMenu, setCurrentMenu] = useState('topMenu')

//   const dispatch = useDispatch()
//   const moves = useSelector(state => state.player.moveset)

//   const handleMove = (move) => {
//     dispatch(setPlayerAction(move))
//     dispatch(playerAction()) 
//   }

//   return (
//     <>
//     <button onClick={() => setCurrentMenu('topMenu')}>top</button>
//     {
//       currentMenu==='topMenu' && 
//       <TopMenuDiv>
//         <ActionButton onClick={() => setCurrentMenu('fightMenu')}>Fight</ActionButton>
//         <ActionButton onClick={() => console.log('pkmn')}>PKMN</ActionButton>
//         <ActionButton onClick={() => console.log('pack')}>Pack</ActionButton>
//         <ActionButton onClick={() => console.log('run')}>Run</ActionButton>
//       </TopMenuDiv>
//     }
//     {
//       currentMenu==='fightMenu' && 
//       <FightMenuDiv>
//         {moves[0] ? <ActionButton onClick={() => handleMove(moves[0])}>{moves[0].title}</ActionButton> : <p> —</p>}
//         {moves[1] ? <ActionButton onClick={() => handleMove(moves[1])}>{moves[1].title}</ActionButton> : <p> —</p>}
//         {moves[2] ? <ActionButton onClick={() => handleMove(moves[2])}>{moves[2].title}</ActionButton> : <p> —</p>}
//         {moves[3] ? <ActionButton onClick={() => handleMove(moves[3])}>{moves[3].title}</ActionButton> : <p> —</p>}
//       </FightMenuDiv>
//     }
//     </>
//   )
// }

// export default ActionBox