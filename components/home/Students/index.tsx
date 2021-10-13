import React, { ReactElement } from 'react';

export default function Students(): ReactElement {
	return (
		<div className="flex flex-col justify-evenly text-center py-20">
			<header className="font-bold text-5xl mb-8">
				From Our Previous Students
			</header>
			<div className="flex justify-between items-center">
				<div className="flex flex-col items-center">
					<img
						src="/assets/students/fk.svg"
						alt="Fatna Kamishna"
						className="w-72"
					/>
					<h1 className="text-4xl text-primary mb-2">Fatna Kamishna</h1>
					<h1 className="text-4xl mb-2">Arusha Science High School</h1>
					<h2 className="text-2xl italic font-bold text-black mb-10">
						Web Developer
					</h2>

					<div className="w-5/6 text-2xl">
						I have jump start my career in Software engineering and increase my
						professional network in the learning plartform
					</div>
				</div>

				<div className="flex flex-col items-center">
					<img
						src="/assets/students/am.svg"
						alt="Abdulkarim Maleek"
						className="w-72"
					/>
					<h1 className="text-4xl text-primary mb-2">Abdulkarim Maleek</h1>
					<h1 className="text-4xl mb-2">Arusha Science High School</h1>
					<h2 className="text-2xl italic font-bold text-black mb-10">
						Android Developer
					</h2>

					<div className="w-5/6 text-2xl">
						I am now able to make simple apps that I can show it to my friends
						in school. It's so fun and very engaging learning with Rash.
					</div>
				</div>

				<div className="flex flex-col items-center">
					<img
						src="/assets/students/as.svg"
						alt="AbdulKarim Sesay"
						className="w-72"
					/>
					<h1 className="text-4xl text-primary mb-2">AbdulKarim Sesay</h1>
					<h1 className="text-4xl mb-2">University Student</h1>
					<h2 className="text-2xl italic font-bold text-black mb-10">
						Business Consultant
					</h2>

					<div className="w-5/6 text-2xl">
						I learned how Artificial Intelligence can be applied in businesses
						and how they can leverage the technology to maximize profits.
					</div>
				</div>
			</div>
		</div>
	);
}
