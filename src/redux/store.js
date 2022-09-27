import {combineReducers, createStore} from "redux";
import {vocabularyReducer} from './VocabularySlice'
export const store = createStore(combineReducers({vocabularyReducer}))