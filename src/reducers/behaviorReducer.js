const behaviorReducer = (state = ['Enemy is thinking'], action) => {
    switch (action.type) {
        case 'ADD_THOUGHT':
            const updatedState = state.concat(action.data)
            return updatedState
        case 'VICTORY':
            return []
        default:
            return state
    }
}

const updateBehavior = (data) => {
    return {
        type: 'ADD_THOUGHT',
        data
    }
}

export { updateBehavior }

export default behaviorReducer