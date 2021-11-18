import { combineReducers } from "redux";
import logReducer from './logReducer';
import techReducer from './techReducers'

 
export default combineReducers({
    log : logReducer,
    tech : techReducer
})