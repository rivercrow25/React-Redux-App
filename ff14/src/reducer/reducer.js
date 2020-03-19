const initialState = {
    data: [],
    isFetching: false,
    error: '',
    info: [],
    hasInfo: false
}


export const ffReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA': return {
            ...state,
            data: action.payload,
            isFetching: true,
            hasInfo: false
        }
        case 'FAILED': return {
            ...state,
            error: action.payload
        }
        case 'GET_INFO': return {
            ...state,
            info: action.payload,
            hasInfo: true
        }
        default: return state
    }
}