// import React, { useEffect } from 'react'

// import { useSelector, useDispatch } from 'react-redux'

// import { updateBehavior } from '../reducers/behaviorReducer'

// const EnemyBehavior = () => {
//   const dispatch = useDispatch()
  
//   const stage = useSelector(state => state.stage)
  
//   console.log('still alive')
//   useEffect(() => {
//     if (stage==='enemyTurn') {
//       console.log('handling enemy behavior')
//       dispatch(updateBehavior('enemy used attack'))
//       setTimeout(() => dispatch(updateBehavior('attack was successful')), 1500)
//     } // eslint-disable-next-line
//   }, [stage])

//   return null
// }

// export default EnemyBehavior