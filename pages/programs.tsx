import React, { ReactElement } from 'react';
import { NextPage } from 'next'
import Layout from '../components/global/Layout';
import Partners from '../components/global/Partners';
import ProgramsHero from '../components/programs/Hero';
import SchoolCard from '../components/programs/SchoolCard';
import { GetStaticProps } from 'next'

interface Props {
	schools?: { name: string; description: string; imageUrl: string }[];
}

export const getStaticProps = async () => {
	
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

	return {
		props: {
		  schools,
		},
	  }
  }


const Programs: NextPage<Props> = ({ schools }) => {	

	return (
		<Layout>
			<ProgramsHero />
			{schools?.map((school, index) => (
				<SchoolCard {...school} key={index} />
			))}
			<Partners />
		</Layout>
	); 

}


export default Programs