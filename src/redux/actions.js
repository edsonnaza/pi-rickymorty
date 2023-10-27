import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV_BYGENDER,ALL, DELETE_CHARACTER } from "./actions-types";

export const allCharacters = (character) =>{
    return {
        type:ALL,
        payload:character,
    }
}
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

 

export const filterCardsByGender = (gender) => {
    return {
      type: FILTER_FAV_BYGENDER,
      payload: gender,
    };
  };
  
  export const orderCards = (orden) => {
    return {
      type: ORDER_FAV,
      payload: orden,
    };
  };
export const deleteCharacter = (id) =>{
    return {
        type: DELETE_CHARACTER,
        payload:id,
    }
}