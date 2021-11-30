import { combineReducers } from "redux";
import { schoolDetailsReducer, schoolsReducer } from "./programs-reducer";

export const rootReducer = combineReducers({
    schools : schoolsReducer,
    schoolDetails: schoolDetailsReducer
})