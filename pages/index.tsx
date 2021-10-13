import React, { ReactElement } from 'react';

interface Props {}

export default function Home({}: Props): ReactElement {
	return (
		<div className="h-screen">
			<nav className="absolute h-16 w-screen bg-white px-28 flex justify-between items-end py-1 text-textSecondary font-bold text-xl">
				<div>
					<h1>
						Rash <span className="text-primary">Computers</span>
					</h1>
				</div>
				<div className="space-x-9">
					<button className="font-bold">Programs</button>
					<button className="font-bold">Create Account</button>
					<button className="font-bold">Login</button>
				</div>
			</nav>
			<div className="flex justify-between items-center mx-28 h-full space-x-56">
				<div className="flex flex-col h-1/2 justify-between items-start">
					<article>
						<h1 className="text-6xl font-bold mb-3 leading-tight">
							Learn a new skill and prepare yourself for the Fourth Industrial
							Revolution
						</h1>

						<h2 className="text-3xl">
							Our Programs ranges from Web development, to Artificial
							Intelligence and Machine Learning
						</h2>
					</article>

					<button className="bg-primary text-white font-semibold text-3xl px-5 py-3 rounded-full">
						Get Started
					</button>
				</div>

				<img
					src="/assets/home/hero.svg"
					alt="Computer Artwork"
					className="-mt-20"
				/>
			</div>
		</div>
	);
}
