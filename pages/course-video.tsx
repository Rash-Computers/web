import { Button } from "antd";
import { ReactElement } from "react";
import Layout from "../components/global/Layout";


export default function CourseVideoComponent(): ReactElement {

	return (
		<Layout>
            <div className="flex flex-row">
                <div className="-ml-28 pl-28 pt-16 border-r-[1px] border-t-[1px] border-gray-500 w-[17vw] h-[90vh] bg-white">
                    <p className="text-gray-600 text-sm font-normal">Home</p>
                    <p className="text-gray-600 text-sm font-normal mt-8">Dashboard</p>
                    <p className="text-gray-600 text-sm font-normal mt-8">My Courses</p>
                    <p className="text-gray-700 text-sm font-medium mt-8">Log out</p>
                </div>
                <div className="-mr-28 pl-28 pt-4 border-t-[1px] border-gray-500 w-[89vw] h-[90vh]">

                    <h1 className="text-center text-xl -ml-16">1. Introduction</h1>
                    <iframe className="mt-8 w-[67.5vw] h-[65vh]" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                    </iframe>

                    <button className="hover:bg-indigo-500 transition-all hover:border-none hover:text-white bg-transparent border-gray-700 border-[1px] px-9 text-center rounded-3xl mt-8 py-2 font-semibold float-right mr-24">Next</button>

                </div>
            </div>
		</Layout>
	);
}