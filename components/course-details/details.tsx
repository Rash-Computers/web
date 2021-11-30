/**
 * @author: ntwari egide
 * @description: details components
 */

import { ReactChild, ReactFragment, ReactPortal, useEffect } from 'react'
import * as actions from '../../redux/actions/programs-actions'
import { useAppSelector } from '../../redux/store'

interface Props {
	schoolDetails: any
}

const CourseDetails = ({schoolDetails}: Props) => {

    const coursePrerequisite = useAppSelector(state => state?.schoolPrerequisites)

    useEffect(() => {
        actions.getAllSchoolCoursePrerequisite()
    },[coursePrerequisite])
    

    return (
        <div className="flex justify-between items-start mb-56 mt-16">
                <article className="mt-16">
                    <header className="text-primary text-3xl font-semibold mb-10">
                        {schoolDetails?.schoolName}
                    </header>
                    <p className="text-2xl leading-8 w-5/6">
                        {schoolDetails?.description}
                    </p>

                    <h1 className="text-2xl text-primary font-medium mt-8">Prerequisites:</h1>

                    <ul className=" list-disc ml-6 mt-4">
                        {
                            coursePrerequisite?.map( (prerequisite: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) =>{
                                return  <li className="text-xl">{prerequisite?.name}</li>
                            })
                        }
                    </ul>
                </article>
                <img src={schoolDetails?.coverImageUrl} className="w-[30vw] mt-12 -mr-6 rounded-3xl" />
        </div>
    )

}

export default CourseDetails