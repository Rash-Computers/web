import React, { ReactElement } from 'react';

import Hero from '../components/home/Hero';
import Programs from '../components/home/Programs';

export default function Home(): ReactElement {
	return (
		<div className="h-screen mx-28">
			<Hero />
			<Programs />
		</div>
	);
}
