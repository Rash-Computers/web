/**
 * @author: ntwari egide, ntwariegide2@gmail.com
 * @description: schools actions
 */

import axios from "axios"
import { headers } from "../../constants/headers"
import { store } from "../store"
import * as actionTypes from "./action-types"

export const getallschools = async () => {

    const url = '/schools'

    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {
            

            store.dispatch({
                type: actionTypes.GET_ALL_SCHOOLS,
                payload: res.data
            })
        })
    } catch (error) {
        console.log('Error: ',error)   
    }


}



export const getschooldetails = async () => {

    let schoolDetails: any

    schoolDetails =  sessionStorage.getItem('active-school')

    store.dispatch({
        type: actionTypes.GET_SCHOOL_DETAILS,
        payload: JSON.parse(schoolDetails)
    })
    

}


export const getAllSchoolCoursePrerequisite = async () => {

    let schoolDetails: any
    
    schoolDetails =  sessionStorage.getItem('active-school')
    
    let school = JSON.parse(schoolDetails)

    const url = `/course_prerequisite/schools/${school?.id}`


    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {     
            
            store.dispatch({
                type: actionTypes.GET_ALL_COURSE_PREREQUISITES,
                payload: res.data
            })
        })

    } catch (error) {
        console.log('Error: ',error)   
    }
    
}

export const getAllSchoolOutlines = async () => {

    let schoolDetails: any
    
    schoolDetails =  sessionStorage.getItem('active-school')
    
    let school = JSON.parse(schoolDetails)

    const url = `/school_outlines/schools/${school?.id}`


    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {          

            store.dispatch({
                type: actionTypes.GET_ALL_SCHOOL_OUTLINES,
                payload: res.data
            })
        })

    } catch (error) {
        console.log('Error: ',error)   
    }

}

export const getAllSchoolInstructors = async () => {

    let schoolDetails: any
    
    schoolDetails =  sessionStorage.getItem('active-school')
    
    let schoolId = JSON.parse(schoolDetails).id

    const url = `/courses_instructors/schools/${schoolId}`


    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {
            
            console.log('res: ',res.data);            

            store.dispatch({
                type: actionTypes.GET_ALL_SCHOOL_INSTRUCTORS,
                payload: res.data
            })
        })

    } catch (error) {
        console.log('Error: ',error)   
    }

}

export const getAllSchoolCurriculums = async () => {

    let schoolDetails: any
    
    schoolDetails =  sessionStorage.getItem('active-school')
    
    let school = JSON.parse(schoolDetails)

    const url = `/courses_curriculums/school/${school?.id}`


    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {
            
            console.log('res: ',res.data);            

            store.dispatch({
                type: actionTypes.GET_ALL_SCHOOL_CURRICULUMS,
                payload: res.data
            })
        })

    } catch (error) {
        console.log('Error: ',error)   
    }

}

export const getCurrentCourseOutlineDetails = () => {

    let schoolOutlineDetails: any

    schoolOutlineDetails =  sessionStorage.getItem('active-school-outline')

    store.dispatch({
        type: actionTypes.GET_ALL_COURSE_OUTLINE_DETAILS,
        payload: JSON.parse(schoolOutlineDetails)
    })

}


export const getLessonVideoDetails = async () => {

    let schoolOutlineDetails: any
    
    schoolOutlineDetails =  sessionStorage.getItem('active-school-outline')
    
    let outline = JSON.parse(schoolOutlineDetails)

    const url = `/lessons_videos/school-outline/${outline?.id}`

    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {  
            store.dispatch({
                type: actionTypes.GET_LESSON_VIDEO_DETAILS,
                payload: res.data
            })
        })

    } catch (error) {
        console.log('Error: ',error)   
    }

}