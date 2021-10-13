import React, { ReactElement } from 'react';

export default function NavBar(): ReactElement {
	return (
		<nav className="sticky top-0 h-16 w-screen bg-white px-28 flex justify-between items-end py-1 text-textSecondary font-bold text-xl">
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
	);
}
