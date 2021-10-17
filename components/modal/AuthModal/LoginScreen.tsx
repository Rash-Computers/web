import React, { ReactElement } from 'react';

interface Props {
	changeScreenToRegister: () => any;
	changeScreenToReset: () => any;
}

export default function LoginScreen({
	changeScreenToRegister,
	changeScreenToReset,
}: Props): ReactElement {
	return (
		<div>
			<button onClick={changeScreenToRegister}>Register</button>
			<button onClick={changeScreenToReset}>Reset</button>
		</div>
	);
}
