import React, { ReactElement } from 'react';

export default function Hero(): ReactElement {
	return (
		<div className="flex justify-between items-center h-full">
			<div className=" -mt-24 flex w-2/3 flex-col h-1/2 justify-between items-start">
				<article>
					<h1 className="text-5xl font-semibold leading-[60px]">
						Learn a new skill and prepare yourself for the Fourth Industrial
						Revolution
					</h1>

					<h2 className="text-xl mt-4 font-normal">
						Our Programs ranges from Web development, to Artificial Intelligence
						and Machine Learning
					</h2>
				</article>

				<button className="bg-primary text-white text-md mt-6 px-14 py-4 rounded-md hover:border-indigo-600 hover:transition">
					Get Started
				</button>
			</div>

			<img
				src="/assets/home/hero.svg"
				alt="Computer Artwork"
				className="-mt-20 ml-8 w-2/5 left-8 welcome-bg-photo"
			/>
		</div>
	);
}
