
const stageReducer = (state = 'enemyAppear', action) => {
    switch (action.type) {
        case 'ENEMY_APPEAR':
            return 'enemyAppear'

        case 'ENEMY_PRESENT':
            return 'enemyPresent'

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

const enemyAppear = () => {
    return {
        type: 'ENEMY_APPEAR',
    }
}

const enemyPresent = () => {
    return {
        type: 'ENEMY_PRESENT',
    }
}

const playerDecide = () => {
    return {
        type: 'PLAYER_DECIDE',
    }
}

const playerAction = () => {
    return {
        type: 'PLAYER_ACTION',
    }
}

const playerEffect = () => {
    return {
        type: 'PLAYER_EFFECT',
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
    enemyAppear,
    enemyPresent,
    playerDecide,
    playerAction,
    playerEffect,
    enemyDecide, 
    enemyAction, 
    enemyEffect, 
    victory, 
    defeat 
}

export default stageReducer