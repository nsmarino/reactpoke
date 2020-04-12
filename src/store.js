// import redux functions
import { createStore, combineReducers } from 'redux'

// import reducers and combine
import playerReducer from './reducers/playerReducer'
import enemyReducer from './reducers/enemyReducer'
import textReducer from './reducers/textReducer'
import modeReducer from './reducers/modeReducer'
import behaviorReducer from './reducers/behaviorReducer'

const reducer = combineReducers({
    player: playerReducer,
    enemy: enemyReducer,
    text: textReducer,
    mode: modeReducer,
    behavior: behaviorReducer,
  })

// create and export store
const store = createStore(reducer)

// export store!
export default store