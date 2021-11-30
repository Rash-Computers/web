import React, { ReactElement } from 'react';
import { useRouter } from 'next/router'

interface Props {
	schoolDetails: any
}

export default function SchoolCard({schoolDetails}: Props): ReactElement {	

	const router = useRouter()

	const handleonclick = () => {

		sessionStorage.setItem('active-school', JSON.stringify(schoolDetails))

		router.push({
			pathname: '/course-details/[school_id]',
			query: { school_id: schoolDetails?.id },
		})
	}

	return (
			<div className="flex justify-between items-start mt-56 cursor-pointer" 
			onClick={handleonclick}
	  	>
				<article className="mt-20">
					<header className="text-primary text-3xl font-semibold mb-10">
						{schoolDetails?.schoolName}
					</header>
					<p className="text-2xl leading-8 w-5/6">{schoolDetails?.description}</p>
				</article>
				<img src={schoolDetails?.coverImageUrl} className="w-2/5 rounded-2xl" alt={schoolDetails?.schoolName} />
			</div>
	);
}
