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

    let schoolDetails =  sessionStorage.getItem('active-school')

    store.dispatch({
        type: actionTypes.GET_SCHOOL_DETAILS,
        payload: schoolDetails
    })
    

}


export const getAllSchoolCoursePrerequisite = async () => {

    let schoolDetails:any =  sessionStorage.getItem('active-school')
    
    let schoolId = schoolDetails?.id

    const url = `/course_prerequisite/schools/${schoolId}`


    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {
            
            console.log('res: ',res.data);            

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

    let schoolDetails:any =  sessionStorage.getItem('active-school')
    
    let schoolId = schoolDetails?.id

    const url = `/school_outlines/schools/${schoolId}`


    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {
            
            console.log('res: ',res.data);            

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

    let schoolDetails:any =  sessionStorage.getItem('active-school')
    
    let schoolId = schoolDetails?.id

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