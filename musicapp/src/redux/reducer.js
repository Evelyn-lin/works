import { type } from './action';

const song = (state, action) => {
    
    switch (action.type) {
        case type.SEARCH_SONG:
            return {
                ...state,
                query:action.value
            }

        case type.PLAY:
            return{
                ...state,
                ...action.value
            }

        default:
            return {
                ...state,
            }
    }
}
export default song;