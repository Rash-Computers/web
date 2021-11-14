import React, { ReactElement } from 'react';

export default function Demo(): ReactElement {
	return (
		<div className="flex justify-between items-center h-full mt-16">
			<div className="flex items-start space-x-30 justify-between">
				<div className="flex flex-col h-1/2 justify-between items-start">
					<article className="mb-16 w-5/6">
						<h1 className="font-semibold text-2xl">
							Explore Our courses and study in our signature Tablets designed
							for students in schools
						</h1>

						<h2 className="text-xl font-normal text-base mt-8">
							Ideal for High School students, the tablets comes with selected
							courses and an offline code editor that allows you to run your
							code smoothly and have a fantastic learning experience.{' '}
						</h2>
					</article>

					<button className="bg-primary text-white text-md px-14 py-4 rounded-md hover:border-indigo-600 hover:transition">
						Request Demo
					</button>
				</div>

				<img src="/assets/home/ipad.svg" alt="Tablet" className="-mt-20 w-2/5" />
			</div>
		</div>
	);
}
