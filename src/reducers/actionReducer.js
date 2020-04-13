
const actionReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_PLAYER_ACTION':
            const playerAction = action.data
            return playerAction
        case 'SET_ENEMY_ACTION':
            const enemyAction = action.data
            return enemyAction
        default:
            return state
    }
}

const setPlayerAction = (action) => {
    return {
        type: 'SET_PLAYER_ACTION',
        data: action
    }
}

const setEnemyAction = (action) => {
    return {
        type: 'SET_ENEMY_ACTION',
        data: action
    }
}

// const clearText = () => {
//     return {
//         type: 'CLEAR_TEXT',
//     }
// }

export { setPlayerAction, setEnemyAction }

export default actionReducer