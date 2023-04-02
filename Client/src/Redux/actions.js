export const ADD_FAVOURITE= "ADD_FAVOURITE";
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function orderCards(order){
    switch(order){
        case "D":
            return {
                type: ORDER,
                payload: "descendente",
            }
        case "A":
            return {
                type:ORDER,
                payload: "ascendente",
            }
        default:
            return {
                type:ORDER,
                payload: "ascendente",
            }
    }
}

export function filterCards(gender){
    return {
        type: FILTER,
        payload: gender,
    }
}

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