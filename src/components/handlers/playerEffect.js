import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


// import { updateText } from '../../reducers/textReducer'
import { updateEnemyHealth } from '../../reducers/enemyReducer'
import { enemyDecide, victory } from '../../reducers/stageReducer'

const PlayerEffect = () => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.stage)
  const enemy = useSelector(state => state.enemy)
  const action = useSelector(state => state.action)
  
  useEffect(() => {
    if (stage==='playerEffect') {
      console.log('handling player effect')
      // dispatch(updateText(`${action.title} struck for ${action.damage} damage`))
      const newEnemyHealth = enemy.currentHealth - action.damage
      if ( newEnemyHealth <= 0 ) dispatch(victory())
      else {
        dispatch(updateEnemyHealth(newEnemyHealth))
      }
    } // eslint-disable-next-line
  }, [stage])

  // during playerEffect stage, action animates, then calls next stage
  return (
    <>
    {
      stage==='playerEffect' ?
      <div 
        style={action.effectAnimation}
        onAnimationEnd={() => dispatch(enemyDecide())}
      ></div>
      :
      null
    } </>
  )
}

export default PlayerEffect


