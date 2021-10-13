import React, { ReactElement } from 'react';

import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import Programs from '../components/home/Programs';
import Students from '../components/home/Students';

export default function Home(): ReactElement {
	return (
		<div className="h-screen mx-28">
			<Hero />
			<Programs />
			<Partners />
			<Students />
		</div>
	);
}
