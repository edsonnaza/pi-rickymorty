import { ADD_FAV, REMOVE_FAV, COUNT_NUMBER } from "./actions-types";

export const addFav = (character) => {
    return {
        type:ADD_FAV,
        payload: character,
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    };
};

export const countNumber = () =>{
    return {
        type: COUNT_NUMBER,
    }
}