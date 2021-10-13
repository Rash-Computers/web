import React, { ReactElement } from 'react';

import Hero from '../components/home/Hero';

export default function Home(): ReactElement {
	return (
		<div className="h-screen">
			<Hero />
		</div>
	);
}
