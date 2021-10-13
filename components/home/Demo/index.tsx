import React, { ReactElement } from 'react';

export default function Demo(): ReactElement {
	return (
		<div className="flex justify-between items-center h-full">
			<div className="flex items-start space-x-30 justify-between">
				<div className="flex flex-col h-1/2 justify-between items-start">
					<article className="mb-16 w-5/6">
						<h1 className="text-6xl font-bold mb-8 leading-tight">
							Explore Our courses and study in our signature Tablets designed
							for students in schools
						</h1>

						<h2 className="text-3xl">
							Ideal for High School students, the tablets comes with selected
							courses and an offline code editor that allows you to run your
							code smoothly and have a fantastic learning experience.{' '}
						</h2>
					</article>

					<button className="bg-primary text-white font-semibold text-3xl px-5 py-3 rounded-full">
						Request Demo
					</button>
				</div>

				<img src="/assets/home/ipad.svg" alt="Tablet" className="-mt-20" />
			</div>
		</div>
	);
}
