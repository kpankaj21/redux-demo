import { combineReducers } from "redux";
import  {reducer,simpleReducer}  from './reduce';
// import simpleReducer from "./reduce";
 

 const rootReducer=combineReducers ({
    reducer,
    simpleReducer
     
})

export default rootReducer