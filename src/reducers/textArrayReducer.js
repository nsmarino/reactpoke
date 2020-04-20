const defaultState = ['']

const textArrayReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_STRING':
            const newString = action.data
            return state.concat(newString)
        case 'CLEAR_TEXT_ARRAY':
            return []
        case 'NEW_TEXT_ARRAY':
            const newArray = action.data
            return newArray
        default:
            return state
    }
}

const updateTextArray = (string) => {
    return {
        type: 'ADD_STRING',
        data: string,
    }
}

const clearTextArray = () => {
    return {
        type: 'CLEAR_TEXT_ARRAY',
    }
}

const newTextArray = (newArray) => {
    return {
        type: 'NEW_TEXT_ARRAY',
        data: newArray,
    }
}

export { updateTextArray, clearTextArray, newTextArray }

export default textArrayReducer