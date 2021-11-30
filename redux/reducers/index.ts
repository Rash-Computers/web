import { combineReducers } from "redux";
import { schoolCoursePrerequisiteReducer, schoolDetailsReducer, schoolOutlineReducer, schoolsReducer } from "./programs-reducer";

export const rootReducer = combineReducers({
    schools : schoolsReducer,
    schoolDetails: schoolDetailsReducer,
    schoolPrerequisites: schoolCoursePrerequisiteReducer,
    schoolOutlines: schoolOutlineReducer
})