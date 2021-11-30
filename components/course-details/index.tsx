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
    },[schoolDetails])   

    return (
        <div>
            <div className="flex justify-between items-start mb-56 mt-16">
                <article className="mt-16">
                    <header className="text-primary text-3xl font-semibold mb-10">
                        {schoolDetails.schoolName}
                    </header>
                    <p className="text-2xl leading-8 w-5/6">
                        {schoolDetails?.description}
                    </p>

                    <h1 className="text-2xl text-primary font-medium mt-8">Prerequisites:</h1>

                    <ul className=" list-disc ml-6 mt-4">
                        <li className="text-xl">Python programing language</li>
                    </ul>
                </article>
                <img src={schoolDetails?.coverImageUrl} className="w-2/3 mt-12 -mr-6 rounded-3xl" />
            </div>

            <CourseOutlineComponent /> <br />

            <h1 className="mt-6 text-xl">Meet Your Instructor</h1>

            <InstructorDetailsComponent />

        </div>
    )

}


export default CourseDetailsComponent