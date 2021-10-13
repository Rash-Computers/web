import React, { ReactElement } from 'react';

interface Props {}

export default function Programs({}: Props): ReactElement {
	return (
		<div className="h-full flex items-center justify-evenly flex-col">
			<h1 className="font-bold text-5xl">Our Programs Include</h1>

			<div className="h-5/6 w-full grid grid-cols-2 grid-rows-2 gap-10">
				<div className="flex flex-col justify-evenly w-5/6">
					<header className="flex items-center space-x-4">
						<img src="/assets/home/wd.svg" alt="Web Development Art" />
						<h2 className="font-semibold text-4xl">Web Development</h2>
					</header>
					<article className="text-2xl w-3/4">
						With ever increasing demand for business shifting online, now it's
						the best time to learn Web Development.
					</article>
				</div>

				<div className="flex items-center">
					<header className="flex items-start">
						<img src="/assets/home/cp.svg" alt="Computer Programming Art" />
					</header>
					<article className="text-2xl w-3/4">
						<h2 className="font-semibold text-4xl mb-4">
							Computer Programming
						</h2>
						With Computer programming, you get a chance of learning the widely
						used programming languages used in companies
					</article>
				</div>

				<div className="flex flex-col justify-evenly w-5/6">
					<header className="flex items-center space-x-4">
						<img src="/assets/home/pd.svg" alt="Personal Development Art" />
						<h2 className="font-semibold text-4xl">Personal Development</h2>
					</header>
					<article className="text-2xl w-3/4">
						Our Personal Development courses instills you with soft skills that
						will enable you to stand out in the job market.
					</article>
				</div>

				<div className="flex items-center">
					<header className="flex items-start mr-6">
						<img src="/assets/home/ds.svg" alt="Data Science Art" />
					</header>
					<article className="text-2xl w-3/4">
						<h2 className="font-semibold text-4xl mb-4">Data Science</h2>
						Data is what you need to do Analytics, Information is what you need
						to do business. Upgrade your skills in Data Science and make
						informed decisions in businesses today
					</article>
				</div>
			</div>
		</div>
	);
}
