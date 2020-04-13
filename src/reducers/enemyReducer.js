import villain from '../documents/VillainDoc'

const defaultState = villain

const enemyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_ENEMY_HEALTH':
            const updatedState = { ...state, currentHealth: action.data }
            return updatedState
        case 'CLEAR_ENEMY':
            return null
        default:
            return state
    }
}

const updateEnemyHealth = (data) => {
    return {
        type: 'UPDATE_ENEMY_HEALTH',
        data
    }
}

const clearEnemy = () => {
    return {
        type: 'CLEAR_ENEMY'
    }
}

export { updateEnemyHealth, clearEnemy }

export default enemyReducer