import React, { ReactElement } from 'react';

import Layout from '../components/global/Layout';
import Partners from '../components/global/Partners';
import Contact from '../components/home/Contact';
import Demo from '../components/home/Demo';
import Hero from '../components/home/Hero';
import Programs from '../components/home/Programs';
import Students from '../components/home/Students';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default function Home(): ReactElement {
	return (
		<Layout>
			<Hero />
			<Programs />
			<Partners />
			<Students />
			<Demo />
			<Contact />
		</Layout>
	);
}
