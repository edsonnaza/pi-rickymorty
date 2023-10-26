import { ADD_FAV, REMOVE_FAV, COUNT_NUMBER } from "./actions-types";
const initialState={
    myFavorites: [],
    count:0
}

const rootReducer = (state=initialState,{type, payload})=>{
   
    switch (type){
        case ADD_FAV:
            return  {
                ...state,
                myFavorites:[...state.myFavorites, payload]
            }
        
        case REMOVE_FAV:
                let copy = state.myFavorites.filter((favorite)=>{
                        return favorite.id !== parseInt(payload);
                   } ) 
                return {
                    ...state,
                    myFavorites: copy
                }  
        case COUNT_NUMBER:
            return {
                ...state,
                count:state.count+1,
            }
        default:
            return {...state} ;
                   
    }
};

export default rootReducer;