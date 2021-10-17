import React, { ReactElement } from 'react';

interface Props {
	children: React.ReactChild;
	onClick: () => any;
}

export default function Backdrop({ children, onClick }: Props): ReactElement {
	return (
		<div
			onClick={onClick}
			className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center bg-bg bg-opacity-30"
		>
			{children}
		</div>
	);
}
