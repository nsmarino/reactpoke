import villain from '../documents/VillainDoc'

const defaultState = villain

const enemyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TAKE_DAMAGE':
            const updatedState = { ...state, currentHealth: action.data }
            return updatedState
        default:
            return defaultState
    }
}

const updateEnemyHealth = (data) => {
    return {
        type: 'TAKE_DAMAGE',
        data
    }
}

export { updateEnemyHealth }

export default enemyReducer