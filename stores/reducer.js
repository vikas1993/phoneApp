import {GET_CONTACT_LIST,ADD_CONTACT,GET_FAV_CONTACT} from '../action'
// reducer 
const initialState = {data:[],saved:0}

function contactReducer(state=initialState,action){
    switch(action.type){
        case GET_CONTACT_LIST:
        return {
            data:action.payload    
            }
            case GET_FAV_CONTACT:
        return {
            data:action.payload    
            }
        case ADD_CONTACT:
            return{saved:action.payload}    
        default:
            return state;    
    }
}

export default contactReducer