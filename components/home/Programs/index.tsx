import React, { ReactElement } from 'react';

interface Props {}

export default function Programs({}: Props): ReactElement {
	return (
		<div className="h-full flex items-center justify-evenly flex-col">
			<h1 className="font-semibold text-4xl my-8 mb-32">Our Programs Include</h1>

			<div className="h-5/6 w-full grid grid-cols-2 grid-rows-2 gap-10">
				<div className="flex flex-col justify-evenly w-5/6">
					<header className="flex items-center space-x-4">
						<img src="/assets/home/wd.svg" alt="Web Development Art" className="w-2/5" />
						<h2 className="font-semibold text-xl">Web Development</h2>
					</header>
					<article className="w-3/4 text-base">
						With ever increasing demand for business shifting online, now it's
						the best time to learn Web Development.
					</article>
				</div>

				<div className="flex items-center mt-8">
					<header className="flex items-start">
						<img src="/assets/home/cp.svg" alt="Computer Programming Art" />
					</header>
					<article className="ml-4 text-2xl w-3/4">
						<h2 className="font-semibold text-xl">
							Computer Programming
						</h2>
						<p className="mt-4 w-full text-base">With Computer programming, you get a chance of learning the widely
						used programming languages used in companies</p>
					</article>
				</div>

				<div className="mt-16 flex flex-col justify-evenly w-5/6">
					<header className="flex items-center space-x-4">
						<img src="/assets/home/pd.svg" alt="Personal Development Art" />
						<h2 className="font-semibold text-xl">Personal Development</h2>
					</header>
					<article className="w-3/4 text-base mt-14">
						Our Personal Development courses instills you with soft skills that
						will enable you to stand out in the job market.
					</article>
				</div>

				<div className="flex items-center mt-32">
					<header className="flex items-start mr-6">
						<img src="/assets/home/ds.svg" alt="Data Science Art" />
					</header>
					<article className="ml-4 text-2xl w-3/4">
						<h2 className="font-semibold text-xl">Data Science</h2>
						<p className="mt-4 w-full text-base">Data is what you need to do Analytics, Information is what you need
						to do business. Upgrade your skills in Data Science and make
						informed decisions in businesses today</p>
					</article>
				</div>
			</div>
		</div>
	);
}
