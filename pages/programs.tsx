import React, { ReactElement, useEffect } from 'react';
import { NextPage } from 'next'
import Layout from '../components/global/Layout';
import Partners from '../components/global/Partners';
import ProgramsHero from '../components/programs/Hero';
import SchoolCard from '../components/programs/SchoolCard';
import { useAppSelector } from '../redux/store';
import * as actions from '../redux/actions/programs-actions'

interface Props {
	schools?: { name: string; description: string; imageUrl: string }[];
}


const Programs: NextPage<Props> = ({ schools }) => {	

	Programs.getInitialProps = async ({ req }) => {
		
		const schools: { name: string; description: string; imageUrl: string }[] = [];

		return { schools }
	}

	const allschools = useAppSelector(state => state?.schools)

	useEffect(() => {
		actions.getallschools()
	},[allschools])	

	return (
		<Layout>
			<ProgramsHero />
			{allschools?.map((school: any, index: any) => (
				<SchoolCard schoolDetails={school} key={index} />
			))}
			<Partners />
		</Layout>
	); 

}


export default Programs