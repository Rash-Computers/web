import { ReactElement } from "react";
import CourseDetailsComponent from "../../components/course-details";
import Layout from "../../components/global/Layout";

export default function CourseDetails(): ReactElement {
		
	return (
		<Layout>
            <CourseDetailsComponent />
		</Layout>
	);
}