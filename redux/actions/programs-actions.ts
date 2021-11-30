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

    const schools: { name: string; description: string; imageUrl: string }[] = [
		{
			name: 'School Of App Development',
			description:
				'Our School of App Development covers all the concepts that involves developing iOS and Android development. You will learn concepts like React.Js, Flutter, and Kotlin',
			imageUrl: 'ad',
		},
		{
			name: 'School Of Data Science',
			description:
				'Our School of Data Science teaches the basic fundamentals of Artificial Intelligence and Data Science. It includes working with Jupyter Notebooks, Sci-kit learn and other Machine Learning Libraries',
			imageUrl: 'ds',
		},
		{
			name: 'School Of Personal Development',
			description:
				'The School of Personal Development helps you market yourself in the Job market and how you can stand out. It also covers how you can have a successful career in freelancing.',
			imageUrl: 'pd',
		},
		{
			name: 'School Of Web Development',
			description:
				'In the school of Web Development, you will learn the technologies used in developing modern websites. From Front-end development to back-end.',
			imageUrl: 'wd',
		},
	];


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


export const schoolCoursePrerequisite = async () => {

    let schoolDetails =  sessionStorage.getItem('active-school')
    
    // let schoolId = schoolDetails?.id


}