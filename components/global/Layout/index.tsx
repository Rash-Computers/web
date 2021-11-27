import React, { ReactElement } from 'react';

import NavBar from '../NavBar';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
	return (
		<div>
			<NavBar />
			<div className="mx-28">{children}</div>
		</div>
	);
}
