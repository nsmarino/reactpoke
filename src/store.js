// import redux functions
import { createStore, combineReducers } from 'redux'

// import reducers and combine
import playerReducer from './reducers/playerReducer'
import enemyReducer from './reducers/enemyReducer'
import stageReducer from './reducers/stageReducer'
import actionReducer from './reducers/actionReducer'
import textArrayReducer from './reducers/textArrayReducer'

const reducer = combineReducers({
    player: playerReducer,
    enemy: enemyReducer,
    stage: stageReducer,
    action: actionReducer,
    textArray: textArrayReducer,
  })

// create and export store
const store = createStore(reducer)

// export store!
export default store