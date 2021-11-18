import { GET_TECHS, SET_LOADING, ADD_TECHS,DELETE_TECHS,TECHS_ERROR } from "../actions/types";

const initialState = {
    techs: null,
    loading: false,
    error: null
}

export default (state = initialState, action) =>{
    switch(action.type){
        case GET_TECHS:
            return{
                ...state,
                techs: action.payload,
                loading: false
            }
            case TECHS_ERROR:
                return{
                    ...state,
                    error: action.payload
                }
                case SET_LOADING:
                    return{
                        ...state,
                        loading: true
                    }
        default:
            return state
    }
    
}