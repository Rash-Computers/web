import React, { ReactElement } from 'react';

interface Props {
	changeScreenToRegister: () => any;
	changeScreenToReset: () => any;
}

export default function LoginScreen({
	changeScreenToRegister,
	changeScreenToReset,
}: Props): ReactElement {
	const registerClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.stopPropagation();
		changeScreenToRegister();
	};

	const resetClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		changeScreenToReset();
	};

	return (
		<div>
			<button onClick={(e) => registerClick(e)}>Register</button>
			<button onClick={(e) => resetClick(e)}>Reset</button>
		</div>
	);
}
