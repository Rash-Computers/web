import React, { ReactElement } from 'react';

interface Props {}

export default function Contact({}: Props): ReactElement {
	return (
		<div className="py-20 justify-center items-center flex flex-col">
			<header className="font-bold text-5xl">Contact</header>

			<form className="flex flex-col w-1/3 mt-10">
				<label htmlFor="name" className="text-2xl mb-3">
					Name
				</label>
				<input
					type="text"
					name="name"
					className="mb-10 border border-gray-400 rounded-lg h-10 px-3"
				/>

				<label htmlFor="message" className="text-2xl mb-3">
					Message
				</label>
				<textarea
					name="message"
					className="form-textarea mb-12 border border-gray-400 rounded-lg p-3 h-40"
				/>

				<button className="bg-primary text-white font-semibold text-3xl px-5 py-3 rounded-full w-1/2">
					Send Message
				</button>
			</form>
		</div>
	);
}
