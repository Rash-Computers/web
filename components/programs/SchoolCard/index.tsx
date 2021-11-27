import React, { ReactElement } from 'react';
import Link from 'next/link';

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
		<Link href="/course-details">
			<div className="flex justify-between items-start mt-56 cursor-pointer">
				<article className="mt-20">
					<header className="text-primary text-3xl font-semibold mb-10">
						{name}
					</header>
					<p className="text-2xl leading-8 w-5/6">{description}</p>
				</article>
				<img src={`/assets/programs/${imageUrl}.svg`} className="w-2/5" alt={name} />
			</div>
		</Link>
	);
}
