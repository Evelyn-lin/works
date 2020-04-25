import { type } from './action';
import { combineReducers } from 'redux'


const query = (state, action) => {
    switch (action.type) {
        case type.SEARCH_SONG:
            return {
                ...state,
                query: action.value
            }
        default:
            return{
                ...state
            }
    }
}
export default query;