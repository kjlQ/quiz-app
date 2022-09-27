const defaultState = {
    words:[{eng:"Dog",ua:"Собака"}],
}
export const vocabularyReducer = (state=defaultState,action) => {
    switch (action.type) {
        case "ADD__WORD" :
            return {...state,words:[...state.words , action.payload]}
        case "DELETE__WORD" :
            return {...state,words:state.words.filter(item=>item.eng !== action.payload.eng && item.ua !== action.payload.ua )}
        default:
            return state
    }
}