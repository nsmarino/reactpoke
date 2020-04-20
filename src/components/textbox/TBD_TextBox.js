// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import styled from 'styled-components'

// import MoveBox from './ActionBox'

// import { playerDecide, enemyDecide, enemyAction } from '../reducers/stageReducer'

// const TextBoxDiv = styled.div`
//   box-sizing: border-box;
//   border-style: double;
//   border-width: .25em;
//   border-radius: .25em;
//   height: 7em;
//   width: 25em;
//   font-family: monospace;
//   background-color: whitesmoke;
//   display: flex;
//   position: absolute;
//   left: 0em;
//   top: 18em;
// `

// const TextBox = () => {
//   const dispatch = useDispatch()
//   const text = useSelector(state => state.text)
//   const stage = useSelector(state => state.stage)

//   const handleClick = () => {
//     // eslint-disable-next-line
//     switch (stage) {
//       case 'enemyPresent': //
//         dispatch(playerDecide())
//         break;
//       case 'playerEffect': //
//         dispatch(enemyDecide())
//         break;
//       case 'enemyDecide': //
//         dispatch(enemyAction())
//         break;
//       case 'enemyEffect': //
//         dispatch(playerDecide())
//         break;
//     }
//   }
  
//   return (
//     <TextBoxDiv onClick={handleClick}>
//       <div>{text}</div>

//       {stage==='playerDecide'? 
//         <MoveBox />
//         :
//         null
//       }

//       { stage==='enemyPresent' || 
//         stage==='playerEffect' || 
//         stage==='enemyDecide' || 
//         stage==='enemyEffect'
//         ? 
//         <p className="blinker">⮟</p>
//         :
//         null
//       }
//     </TextBoxDiv>
//   )
// }

// export default TextBox

// // Switch can be error-prone and unnecessarily verbose in many cases. You might consider using an object indexed by team name instead:

// // const teams = {
// //   LFC: () => (<Liverpool />),
// //   MUFC: () => (<TerribleTeam />),
// //   Chelsea: () => (<Blues />)
// // }
// // const App = (chosenTeam) => {
// //   return {teams[chosenTeam]()}
// // }