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
			<article className="mt-20">
				<header className="text-primary text-2xl font-semibold mb-10">
					{name}
				</header>
				<p className="text-base leading-8 w-5/6">{description}</p>
			</article>
			<img src={`/assets/programs/${imageUrl}.svg`} className="w-2/5" alt={name} />
		</div>
	);
}
