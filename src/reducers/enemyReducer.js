import villain from '../documents/VillainDoc'

const defaultState = villain

const enemyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_HEALTH':
            const updatedState = { ...state, currentHealth: action.data }
            return updatedState
        default:
            return state
    }
}

const updateEnemyHealth = (data) => {
    return {
        type: 'UPDATE_HEALTH',
        data
    }
}

export { updateEnemyHealth }

export default enemyReducer