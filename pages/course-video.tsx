/**
 * @author: ntwari egide
 * @description: course video component
 */

import * as actions from '../redux/actions/programs-actions'
import { Button } from "antd";
import { ReactElement, useEffect } from "react";
import Layout from "../components/global/Layout";
import { useAppSelector } from '../redux/store';


export default function CourseVideoComponent(): ReactElement {

    const currentCourseOutline = useAppSelector(state => state?.currentSchoolOutlineDetails)

    console.log('data: ',currentCourseOutline);    

    useEffect(() => {
        actions.getCurrentCourseOutlineDetails()
    },[currentCourseOutline])

	return (
		<Layout>
            <div className="flex flex-row">
                <div className="-ml-28 pl-28 pt-16 border-r-[1px] border-t-[1px] border-gray-300 w-[17vw] h-[90vh] bg-white">
                    <p className="text-gray-600 text-sm font-normal hover:text-gray-700 hover:font-medium cursor-pointer">Home</p>
                    <p className="text-gray-600 text-sm font-normal hover:text-gray-700 hover:font-medium cursor-pointer mt-8">Dashboard</p>
                    <p className="text-gray-600 text-sm font-normal hover:text-gray-700 hover:font-medium cursor-pointer mt-8">My Courses</p>
                    <p className="text-gray-700 text-sm font-medium mt-8">Log out</p>
                </div>
                <div className="-mr-28 pl-28 pt-4 border-t-[1px] border-gray-300 w-[89vw] h-[90vh]">

                    <h1 className="text-center text-xl -ml-16">1. {currentCourseOutline?.outline}</h1>
                    <iframe className="mt-8 w-[67.5vw] h-[65vh]" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                    </iframe>

                    <button className="hover:bg-indigo-500 transition-all hover:border-none hover:text-white bg-transparent border-gray-700 border-[1px] px-9 text-center rounded-3xl mt-8 py-2 font-semibold float-right mr-24">Next</button>

                </div>
            </div>
		</Layout>
	);
}