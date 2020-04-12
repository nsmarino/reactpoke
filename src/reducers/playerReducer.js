import cloud from '../documents/CloudDoc'

const defaultState = cloud

const playerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'PLAYER_IDLE':
            return {...state, avatar: action.data}
        case 'PLAYER_ATTACK':
            return {...state, avatar: action.data}
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