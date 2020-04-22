// hooks:
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// reducers:
import { victory, defeat } from '../reducers/stageReducer'
import { newTextArray } from '../reducers/textArrayReducer'
import { updateEnemyHealth } from '../reducers/enemyReducer'
import { updatePlayerHealth } from '../reducers/playerReducer'
import { setEnemyAction } from '../reducers/actionReducer'
// utils:
import roll from '../utils/roll'

const useStageHandler = () => {
  // const [attackHit, setAttackHit] = useState(null)
  const dispatch = useDispatch()
  // state selections:
  const stage = useSelector(state=> state.stage)
  const player = useSelector(state=> state.player)
  const enemy = useSelector(state=> state.enemy)
  const action = useSelector(state => state.action)
  // empty div used for attack animations:
  const animationDiv = document.querySelector('.animation')

  useEffect(() => {
    // Less complicated than it appears: each time the 'stage'
    // changes in redux store, the appropriate code block fires
    if (stage==='enemyAppear') {
        const handleAppearEnd = (sprite) => {
          sprite.classList.remove('slide')
          // dispatch(enemyPresent())
        }
        const enemySprite = document.querySelector('.enemySprite')
        enemySprite.classList.add('slide')
        enemySprite.addEventListener('animationend', () => handleAppearEnd(enemySprite)) 
    }
    if (stage==='enemyPresent') {
    dispatch(newTextArray([`Wild ${enemy.name.toUpperCase()} appeared!`]))
    }
    if (stage==='playerDecide') {
      dispatch(newTextArray([`What should ${player.name} do?`]))
    }
    if (stage==='playerAction') {
      // Adding Probability?
      // const rolled = roll()
      // if (rolled < 95) setAttackHit(true)
      // if (rolled > 95) {
      //   setTimeout(() => dispatch(updateText(`But ${player.name}'s attack missed!`)), 2000)
      //   setTimeout(() => dispatch(enemyDecide()), 1000)
      // }

      // PROOF OF CONCEPT: Animating Player Action
      // Would still be nice to use Styled Components.
      const handleAnimationEnd = () => {
        animationDiv.setAttribute('style', '')
        console.log('animation has ended')
      }
      dispatch(newTextArray([`${player.name} used ${action.title}`]))
      // adds a style attribute to div with animation from player object
      // to be removed at end of animation (can also trigger next stage)
      animationDiv.setAttribute('style', action.newAnimation)
      animationDiv.addEventListener('animationend', handleAnimationEnd)
    }
    if (stage==='playerEffect') {
      const newEnemyHealth = enemy.currentHealth - action.damage
      if ( newEnemyHealth <= 0 ) dispatch(victory())
      else {
        dispatch(updateEnemyHealth(newEnemyHealth))
      }
    }
    if (stage==='enemyDecide') {
      const handleEnemyDecide = () => {
        const rolled = roll()   
        const action = rolled > 50 ? enemy.moveset[0] : enemy.moveset[1]
        dispatch(setEnemyAction(action))
      }
      handleEnemyDecide()
    }
    if (stage==='enemyAction') {
      dispatch(newTextArray([`${enemy.name} used ${action.title}`]))
    }
    if (stage==='enemyEffect') {      
      const newPlayerHealth = player.currentHealth - action.damage
      if ( newPlayerHealth <= 0 ) dispatch(defeat())
      else {
        dispatch(updatePlayerHealth(newPlayerHealth))
      }
    }
    if (stage==='victory') {
      console.log('handling victory')
    }
    if (stage==='rewards') {
      console.log('handling rewards')
    }
    if (stage==='defeat') {
      console.log('handling defeat')
    }
    // eslint-disable-next-line
    }, [stage])
}

export default useStageHandler

  // Sample handler functions for object literal
  // const handleAppear = () => console.log('enemyAppear SUCCESS')
  // const handlePresent = () => console.log('enemyPresent SUCCESS')

  // Refactor contents of effect hook into an object literal?
  // each handler to be written as a function as demonstrated
  // const handle = (currentStage) => {
  //   const handleFor = {
  //     enemyAppear: handleAppear, // ()=> console.log('enemy appear'),
  //     enemyPresent: handlePresent, // ()=> console.log('enemy present'),
  //     playerDecide: ()=> console.log('player decide'),
  //     playerAction: ()=> console.log('player action'),
  //     playerEffect: ()=> console.log('player effect'),
  //     enemyDecide: ()=> console.log('enemy decide'),
  //     enemyAction: ()=> console.log('enemy action'),
  //     enemyEffect: ()=> console.log('enemy effect'),
  //   }
  //   return handleFor[currentStage]()
  // }
  // handle(stage)
