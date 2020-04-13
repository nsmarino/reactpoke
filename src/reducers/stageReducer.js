
const stageReducer = (state = 'idle', action) => {
    switch (action.type) {
        case 'cloudAttack':
            return 'cloudAttack'
        case 'VICTORY':
            return 'victory'
        case 'ENEMY_TURN':
            return 'enemyTurn'
        default:
            return state
    }
}

const victory = () => {
    return {
        type: 'VICTORY',
    }
}

const enemyTurn = () => {
    return {
        type: 'ENEMY_TURN',
    }
}

export { victory, enemyTurn }

export default stageReducer