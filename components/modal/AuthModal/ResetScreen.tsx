import React, { ReactElement } from 'react';

interface Props {
	changeScreenToRegister: () => any;
	changeScreenToLogin: () => any;
}

export default function ResetScreen({
	changeScreenToRegister,
	changeScreenToLogin,
}: Props): ReactElement {
	const registerClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.stopPropagation();
		changeScreenToRegister();
	};

	const loginClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		changeScreenToLogin();
	};

	return (
		<div>
			<button onClick={(e) => registerClick(e)}>Register</button>
			<button onClick={(e) => loginClick(e)}>Login</button>
		</div>
	);
}
