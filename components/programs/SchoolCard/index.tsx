import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {
	schoolDetails: any
}

export default function SchoolCard({schoolDetails}: Props): ReactElement {	

	return (
		<Link href="/course-details">
			<div className="flex justify-between items-start mt-56 cursor-pointer">
				<article className="mt-20">
					<header className="text-primary text-3xl font-semibold mb-10">
						{schoolDetails?.schoolName}
					</header>
					<p className="text-2xl leading-8 w-5/6">{schoolDetails?.description}</p>
				</article>
				<img src={schoolDetails?.coverImageUrl} className="w-2/5" alt={schoolDetails?.schoolName} />
			</div>
		</Link>
	);
}
