import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch} from 'react-redux'
import { updateText } from '../../reducers/textReducer'
import { playerEffect, enemyDecide } from '../../reducers/stageReducer'

import roll from '../../utils/roll'

const PlayerAction = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const player = useSelector(state => state.player)
  const action = useSelector(state => state.action)

  const [attackHit, setAttackHit] = useState(null)
  
  useEffect(() => {
    if (stage==='playerAction') {
      dispatch(updateText(`${player.name} used ${action.title}`))
      const rolled = roll()
      console.log(rolled)
      if (rolled < 95) setAttackHit(true)
      if (rolled > 95) {
        setTimeout(() => dispatch(updateText(`But ${player.name}'s attack missed!`)), 2000)
        setTimeout(() => dispatch(enemyDecide()), 1000)
      }
      // setAttackHit(true)
    } // eslint-disable-next-line
  }, [stage])

    const handleAttackHit = () => {
      return attackHit ? 
      <div 
      style={action.animation} 
      onAnimationEnd={() => dispatch(playerEffect())}
      ></div>
      :
      null
    }

    return (
    <>
    {
      stage==='playerAction' ?
      handleAttackHit()
      :
      null
    } 
    </>
    )
}

export default PlayerAction

      // {/* <div 
      //   style={action.animation} 
      //   onAnimationEnd={() => dispatch(playerEffect())}
      // ></div> */}
