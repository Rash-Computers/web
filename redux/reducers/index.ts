import { combineReducers } from "redux";
import { schoolCoursePrerequisiteReducer, schoolCurriculumsReducer, schoolDetailsReducer, schoolInstuctorsReducer, schoolOutlineReducer, schoolsReducer } from "./programs-reducer";

export const rootReducer = combineReducers({
    schools : schoolsReducer,
    schoolDetails: schoolDetailsReducer,
    schoolPrerequisites: schoolCoursePrerequisiteReducer,
    schoolOutlines: schoolOutlineReducer,
    schoolInstuctors: schoolInstuctorsReducer,
    schoolCurriculums: schoolCurriculumsReducer
})