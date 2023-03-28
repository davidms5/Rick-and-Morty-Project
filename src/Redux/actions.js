const ADD_FAVOURITE= "ADD_FAVOURITE";
const DELETE_FAVOURITE = "DELETE_FAVOURITE";

export function addFavourite(character){
    return {
        type: ADD_FAVOURITE,
        payload: character,
    };
};

export function deleteFavourite(id){
    return {
        type: DELETE_FAVOURITE,
        payload: id,
    };
}