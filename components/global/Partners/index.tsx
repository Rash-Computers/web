import React, { ReactElement } from 'react';

export default function Partners(): ReactElement {
	return (
		<div className="flex justify-center flex-col items-center py-20 mt-32">
			<header className="font-semibold text-4xl my-8 mb-16 ">
				Our Partnering Institutions
			</header>
			<div className="flex items-center justify-between w-full space-x-8">
				<div className="w-1/5">
					<img src="/assets/partners/kolibri.svg" alt="Kolibri Education" />
				</div>
				<div className="w-1/5">
					<img src="/assets/partners/openedx.svg" alt="Open edX" />
				</div>
				<div className="w-1/5">
					<img src="/assets/partners/reb.svg" alt="Rwanda Education Board" />
				</div>
				<div className="w-1/5">
					<img src="/assets/partners/alliance.svg" alt="Alliance AI" />
				</div>
				<div className="w-1/5">
					<img src="/assets/partners/ric.svg" alt="Rwanda ICT Chamber" />
				</div>
			</div>
		</div>
	);
}
