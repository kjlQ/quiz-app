const defaultState = {
    words:[],
}
export const vocabularyReducer = (state=defaultState,action) => {
    switch (action.type) {
        case "ADD__WORD" :
            return {...state,words:[...state.words , action.payload]}
        case "DELETE__WORD" :
            return {...state,words:state.words.filter(item=>item.eng !== action.payload.eng && item.ua !== action.payload.ua )}
        case "GET__LOCAL__STORAGE" :
            return {...state,words:action.payload}
        default:
            return state
    }
}