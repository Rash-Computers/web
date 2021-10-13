import React, { ReactElement } from 'react';

export default function Partners(): ReactElement {
	return (
		<div className="flex justify-center flex-col items-center py-20">
			<header className="font-bold text-5xl">
				Our Partnering Institutions
			</header>
			<div className="flex items-center justify-between w-full">
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
