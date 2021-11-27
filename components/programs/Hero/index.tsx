import React, { ReactElement } from 'react';

export default function ProgramsHero(): ReactElement {
	return (
		<div className="flex mt-32 justify-between items-center h-full">
			<div className="flex items-start justify-between">
				<article className="w-2/4">
					<h1 className="text-5xl font-semibold mb-8 leading-tight">
						Upgrade your skills by Enrolling in one of our Schools.
					</h1>

					<h2 className="text-xl font-normal leading-loose">
						The Curriculums are categorized in schools. Chose your relevant
						paths by enrolling in one of the schools
					</h2>
				</article>

				<img src="/assets/programs/hero.svg" className="w-2/5" alt="Code" />
			</div>
		</div>
	);
}
