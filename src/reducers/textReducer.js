const defaultState = 'What should Cloud do?'

const textReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            const text = action.data
            return text
        case 'CLEAR_TEXT':
            const emptyString = ''
            return emptyString
        default:
            return state
    }
}

const updateText = (text) => {
    return {
        type: 'SET_TEXT',
        data: text
    }
}

const clearText = () => {
    return {
        type: 'CLEAR_TEXT',
    }
}

export { updateText, clearText }

export default textReducer