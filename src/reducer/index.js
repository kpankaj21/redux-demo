import { combineReducers } from "redux";
import  {reducer,simpleReducer,updateReducer,updateFormReducer}  from './reduce';
// import simpleReducer from "./reduce";
 

 const rootReducer=combineReducers ({
    reducer,
    simpleReducer,
    updateReducer,
    updateFormReducer
     
})

export default rootReducer