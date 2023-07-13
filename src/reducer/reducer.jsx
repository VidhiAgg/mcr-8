export const reducer = (state, action) =>{
    switch(action.type){

    case "_search_input_" : return{...state, searchTag:action.payload}
    case "_dropdown_" : return{...state, 
        dropownTag:action.payload}


        default: return state
    }


        

    
}