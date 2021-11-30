import { combineReducers } from "redux";
import { currentLessonVideoReducer, schoolCoursePrerequisiteReducer, schoolCurrentOutlineReducer, schoolCurriculumsReducer, schoolDetailsReducer, schoolInstuctorsReducer, schoolOutlineReducer, schoolsReducer } from "./programs-reducer";

export const rootReducer = combineReducers({
    schools : schoolsReducer,
    schoolDetails: schoolDetailsReducer,
    schoolPrerequisites: schoolCoursePrerequisiteReducer,
    schoolOutlines: schoolOutlineReducer,
    schoolInstuctors: schoolInstuctorsReducer,
    schoolCurriculums: schoolCurriculumsReducer,
    currentSchoolOutlineDetails: schoolCurrentOutlineReducer,
    lessonVideo: currentLessonVideoReducer
})