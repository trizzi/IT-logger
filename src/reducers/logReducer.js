import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOGS, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOGS  } from "../actions/types";

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGS:
            return{
                ...state,
                logs: action.payload,
                loading: false
            };
            case ADD_LOG:
                return{
                    ...state,
                    logs: [...state.logs, action.payload],  
                    loading: false
                }; 
                case UPDATE_LOG:
                    return{
                        ...state,
                        logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
                    }
                case DELETE_LOGS:
                    return{
                        ...state,
                        logs: state.logs.filter(log => log.id !== action.payload),
                        loading: false
                    }
                    case SEARCH_LOGS:
                        return{
                            ...state,
                            logs: action.payload
                        }
                    case SET_CURRENT:
                        return{
                            ...state,
                            current: action.payload
                        }
                        case CLEAR_CURRENT:
                            return{
                                ...state,
                                current: null 
                            }
        case SET_LOADING:
            return {
                ...state,
                loading: true 
            };
            case LOGS_ERROR: 
                return{
                    ...state,
                    error: action.payload,
                    loading: false
                }; 
        default:
            return state;
    }
}