import React, { ReactElement } from 'react';

interface Props {
	name: string;
	description: string;
	imageUrl: string;
}

export default function SchoolCard({
	name,
	description,
	imageUrl,
}: Props): ReactElement {
	return (
		<div className="flex justify-between items-start mb-56">
			<article className="">
				<header className="text-primary text-4xl font-bold mb-10">
					{name}
				</header>
				<p className="text-4xl w-5/6">{description}</p>
			</article>
			<img src={`/assets/programs/${imageUrl}.svg`} alt={name} />
		</div>
	);
}
