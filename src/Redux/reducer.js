import {ADD_FAVOURITE, DELETE_FAVOURITE} from './actions'

const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_FAVOURITE:
            return {
                ...state,
                myFavorites:[...state.myFavorites, action.payload]
            };
        
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