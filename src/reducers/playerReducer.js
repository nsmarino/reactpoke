import cloud from '../documents/CloudDoc'

const defaultState = cloud

const playerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'PLAYER_DECIDE':
            return state
            // return {...state, avatar: action.data}
        case 'PLAYER_ACTION':
            return state
        default:
            return state
    }
}

const animateAttack = () => {
    return {
        type: 'PLAYER_ATTACK',
        data: 'test string',
    }
}

const animateIdle = () => {
    return {
        type: 'PLAYER_IDLE',
        data: 'test string',
    }
}

export { animateAttack, animateIdle }

export default playerReducer