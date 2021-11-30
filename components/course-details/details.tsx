
interface Props {
	schoolDetails: any
}

const CourseDetails = ({schoolDetails}: Props) => {

    // schoolDetails = {"id":3,"schoolName":"School Of Data Science","description":"Our School of Data Science teaches the basic fundamentals of Artificial Intelligence and Data Science. It includes working with Jupyter Notebooks, Sci-kit learn and other Machine Learning Libraries","coverImageUrl":"https://rashcomputeres.vercel.app/assets/programs/ds.svg","published":true,"archived":false}
    

    return (
        <div className="flex justify-between items-start mb-56 mt-16">
                <article className="mt-16">
                    <header className="text-primary text-3xl font-semibold mb-10">
                        {schoolDetails.schoolName}
                        {/* School Of App Development */}
                    </header>
                    <p className="text-2xl leading-8 w-5/6">
                        {schoolDetails?.description}
                    </p>

                    <h1 className="text-2xl text-primary font-medium mt-8">Prerequisites:</h1>

                    <ul className=" list-disc ml-6 mt-4">
                        <li className="text-xl">Python programing language</li>
                    </ul>
                </article>
                <img src={schoolDetails?.coverImageUrl} className="w-2/4 mt-12 -mr-6 rounded-3xl" />
        </div>
    )

}

export default CourseDetails