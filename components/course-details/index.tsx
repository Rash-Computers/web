/**
 * @author: ntwari egide
 * @description: course details component
 */

import { useEffect } from "react"
import CourseOutlineComponent from "./CourseOutline"
import InstructorDetailsComponent from "./InstructorDetails"
import * as actions from "../../redux/actions/programs-actions"
import { useAppSelector } from "../../redux/store"
import { NextPage } from "next"
import CourseDetails from "./details"

interface SchoolDetails {
    archived: Boolean,
    coverImageUrl: String,
    description: String,
    id: Number,
    published: Boolean,
    schoolName: String
}



const CourseDetailsComponent : NextPage = () => {

    const schoolDetails = useAppSelector(state => state?.schoolDetails)
    useEffect(() => {
        actions.getschooldetails()
        
    },[])   


    return (
        <div>
            
            <CourseDetails schoolDetails={schoolDetails} />

            <CourseOutlineComponent /> <br />

            <h1 className="mt-6 text-xl">Meet Your Instructor</h1>

            <InstructorDetailsComponent />

        </div>
    )

}







export default CourseDetailsComponent