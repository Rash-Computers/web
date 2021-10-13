import React, { ReactElement } from 'react';

import Partners from '../components/global/Partners';
import Contact from '../components/home/Contact';
import Demo from '../components/home/Demo';
import Hero from '../components/home/Hero';
import Programs from '../components/home/Programs';
import Students from '../components/home/Students';

export default function Home(): ReactElement {
	return (
		<div className="h-screen mx-28">
			<Hero />
			<Programs />
			<Partners />
			<Students />
			<Demo />
			<Contact />
		</div>
	);
}
