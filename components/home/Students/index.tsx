import React, { ReactElement } from 'react';

export default function Students(): ReactElement {
	return (
		<div className="flex flex-col justify-evenly text-center py-20">
			<header className="font-semibold text-4xl my-8 mb-16">
				From Our Previous Students
			</header>
			<div className="flex justify-between items-center">
				<div className="flex flex-col items-center w-full">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="Fatna Kamishna"
						className="w-48 h-48 object-fill rounded-full shadow-sm"
					/>
					<h1 className="text-xl text-primary mb-2 mt-4">Fatna Kamishna</h1>
					<h1 className="text-xl font-medium mb-2">Arusha Science High School</h1>
					<h2 className="text-black font-light italic mb-10">
						Web Developer
					</h2>

					<div className="w-5/6">
						I have jump start my career in Software engineering and increase my
						professional network in the learning plartform
					</div>
				</div>

				<div className="flex flex-col items-center">
					<img
						src="https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Fatna Kamishna"
						className="w-48 h-48 object-fill rounded-full shadow-sm"
					/>
					<h1 className="text-xl text-primary mb-2 mt-4">Abdulkarim Maleek</h1>
					<h1 className="text-xl font-medium mb-2">Arusha Science High School</h1>
					<h2 className="text-black font-light italic mb-10">
						Android Developer
					</h2>

					<div className="w-5/6">
					I am now able to make simple apps that I can show it to my friends
						in school. It's so fun and very engaging learning with Rash
					</div>
					
				</div>

				<div className="flex flex-col items-center">

					<img
						src="https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="Fatna Kamishna"
						className="w-48 h-48 object-fill rounded-full shadow-sm"
					/>
					<h1 className="text-xl text-primary mb-2 mt-4">AbdulKarim Sesay</h1>
					<h1 className="text-xl font-medium mb-2">University Student</h1>
					<h2 className="text-black font-light italic mb-10">
						Business Consultant
					</h2>

					<div className="w-5/6">
						I learned how Artificial Intelligence can be applied in businesses
						and how they can leverage the technology to maximize profits
					</div>
					
				</div>
			</div>
		</div>
	);
}
