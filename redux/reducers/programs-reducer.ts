/**
 * @author: ntwari egide, ntwariegide2@gmail.com
 * @description: schools actions
 */

import * as actionTypes from "../actions/action-types"

const initialstate : any[] = []

export const schoolsReducer = ( state = initialstate, action: any) => {

    switch (action.type) {
        case actionTypes.GET_ALL_SCHOOLS:
            
            return action.payload
     
        default:
            return state;
    }

}

export const schoolDetailsReducer = ( state = initialstate, action: any) => {

    switch (action.type) {
        case actionTypes.GET_SCHOOL_DETAILS:
            
            return action.payload
     
        default:
            return state;
    }

}


export const schoolCoursePrerequisiteReducer = ( state = initialstate, action: any) => {

    switch (action.type) {
        case actionTypes.GET_ALL_COURSE_PREREQUISITES:
            
            return action.payload
     
        default:
            return state;
    }

}


export const schoolOutlineReducer = ( state = initialstate, action: any) => {

    switch (action.type) {
        case actionTypes.GET_ALL_SCHOOL_OUTLINES:
            
            return action.payload
     
        default:
            return state;
    }

}


export const schoolInstuctorsReducer = ( state = initialstate, action: any) => {

    switch (action.type) {
        case actionTypes.GET_ALL_SCHOOL_INSTRUCTORS:
            
            return action.payload
     
        default:
            return state;
    }

}


export const schoolCurriculumsReducer = ( state = initialstate, action: any) => {

    switch (action.type) {
        case actionTypes.GET_ALL_SCHOOL_CURRICULUMS:
            
            return action.payload
     
        default:
            return state;
    }

}



export const schoolCurrentOutlineReducer = ( state = initialstate, action: any) => {

    switch (action.type) {
        case actionTypes.GET_ALL_COURSE_OUTLINE_DETAILS:
            
            return action.payload
     
        default:
            return state;
    }

}
