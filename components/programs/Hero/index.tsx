import React, { ReactElement } from 'react';

export default function ProgramsHero(): ReactElement {
	return (
		<div className="flex justify-between items-center h-full">
			<div className="flex items-start justify-between">
				<article>
					<h1 className="text-6xl font-bold mb-8 leading-tight">
						Upgrade your skills by Enrolling in one of our Schools.
					</h1>

					<h2 className="text-3xl">
						The Curriculums are categorized in schools. Chose your relevant
						paths by enrolling in one of the schools
					</h2>
				</article>

				<img src="/assets/programs/hero.svg" alt="Code" />
			</div>
		</div>
	);
}
