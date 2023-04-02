import {ADD_FAVOURITE, DELETE_FAVOURITE, FILTER, ORDER} from './actions'

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_FAVOURITE:
            return {
                ...state,
                allCharacters:[...state.allCharacters, action.payload]
            };

        case FILTER:
            return {
                ...state,
                allCharacters: state.allCharacters.filter(item => item.gender === action.payload)
            }

        case ORDER:
            return {
                ...state,
                //terminar esta parte
            }
        
        case DELETE_FAVOURITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(item=> item.id !== action.payload)
            };
        default:
            return state;
    }
}

export default reducer;