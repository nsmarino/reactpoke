
const stageReducer = (state = 'enemyPresent', action) => {
    switch (action.type) {

        case 'PLAYER_DECIDE':
            return 'playerDecide'

        case 'PLAYER_ACTION':
            return 'playerAction'

        case 'PLAYER_EFFECT':
            return 'playerEffect'

        case 'ENEMY_DECIDE':
            return 'enemyDecide'

        case 'ENEMY_ACTION':
            return 'enemyAction'

        case 'ENEMY_EFFECT':
            return 'enemyEffect'

        case 'VICTORY':
            return 'victory'

        case 'DEFEAT':
            return 'defeat'

        default:
            return state
    }
}

const enemyDecide = () => {
    return {
        type: 'ENEMY_DECIDE',
    }
}

const enemyAction = () => {
    return {
        type: 'ENEMY_ACTION',
    }
}

const enemyEffect = () => {
    return {
        type: 'ENEMY_EFFECT',
    }
}

const victory = () => {
    return {
        type: 'VICTORY',
    }
}

const defeat = () => {
    return {
        type: 'DEFEAT',
    }
}

export {
    enemyDecide, 
    enemyAction, 
    enemyEffect, 
    victory, 
    defeat 
}

export default stageReducer