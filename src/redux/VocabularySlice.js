const defaultState = {
    words:[
        // {eng: "Founder", ua: "Засновник"},
        // {eng: "Invent", ua: "Винаходити"},
        // {eng: "Event", ua: "Захід"},
        // {eng: "Cup", ua: "Чашка"},
        // {eng: "Whale", ua: "Кит"},
        // {eng: "Law", ua: "Закон"},
        // {eng: "Hand", ua: "Рука"},
        // {eng: "Profit", ua: "Прибуток"},
        // {eng: "Nature", ua: "Природа"},
        // {eng: "Benefit", ua: "Користь"},
    ],
    results:[]
}
export const vocabularyReducer = (state=defaultState,action) => {
    switch (action.type) {
        case "ADD__WORD" :
            return {...state,words:[...state.words , action.payload]}
        case "DELETE__WORD" :
            return {...state,words:state.words.filter(item=>item.eng !== action.payload.eng || item.ua !== action.payload.ua )}
        case "GET__LOCAL__STORAGE" :
            return {...state,words:action.payload}
        case "GET__LOCAL__STORAGE__RESULTS" :
            return {...state,results:action.payload}
        default:
            return state
    }
}