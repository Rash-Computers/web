/**
 * @author: ntwari egide
 * @description: course details component
 */

import { ReactElement } from "react"
import CourseOutlineComponent from "./CourseOutline"

export default function CourseDetailsComponent (): ReactElement {

    return (
        <div>
            <div className="flex justify-between items-start mb-56 mt-16">
                <article className="mt-16">
                    <header className="text-primary text-3xl font-semibold mb-10">
                        School Of Machine Learning
                    </header>
                    <p className="text-2xl leading-8 w-5/6">Our School of Machine Learning teaches the basic fundamentals of  Machine Learning. It includes working with Jupyter Notebooks, Sci-kit learn and other Machine Learning Libraries</p>

                    <h1 className="text-2xl text-primary font-medium mt-8">Prerequisites:</h1>

                    <ul className=" list-disc ml-6 mt-4">
                        <li className="text-xl">Python programing language</li>
                    </ul>
                </article>
                <img src={`https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} className="w-2/3 mt-12 -mr-6 rounded-3xl" />
            </div>

            <CourseOutlineComponent /> <br />

        </div>
    )

}
