import cloud from '../documents/CloudDoc'

const defaultState = cloud

const playerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_PLAYER_HEALTH':
            const updatedState = { ...state, currentHealth: action.data }
            return updatedState
        default:
            return state
    }
}

const updatePlayerHealth = (data) => {
    return {
        type: 'UPDATE_PLAYER_HEALTH',
        data
    }
}

export { updatePlayerHealth }

export default playerReducer