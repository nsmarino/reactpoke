// import redux functions
import { createStore, combineReducers } from 'redux'

// import reducers and combine
import playerReducer from './reducers/playerReducer'
import enemyReducer from './reducers/enemyReducer'
import textReducer from './reducers/textReducer'
import stageReducer from './reducers/stageReducer'

const reducer = combineReducers({
    player: playerReducer,
    enemy: enemyReducer,
    text: textReducer,
    stage: stageReducer,
  })

// create and export store
const store = createStore(reducer)

// export store!
export default store