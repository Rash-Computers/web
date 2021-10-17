import React, { ReactElement } from 'react';

interface Props {
	changeScreenToLogin: () => any;
	changeScreenToReset: () => any;
}

export default function RegisterScreen({
	changeScreenToLogin,
	changeScreenToReset,
}: Props): ReactElement {
	const loginClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		changeScreenToLogin();
	};

	const resetClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		changeScreenToReset();
	};

	return (
		<div>
			<button onClick={(e) => loginClick(e)}>Login</button>
			<button onClick={(e) => resetClick(e)}>Reset</button>
		</div>
	);
}
