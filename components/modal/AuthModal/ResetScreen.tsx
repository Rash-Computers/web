import React, { ReactElement } from 'react';

interface Props {
	changeScreenToRegister: () => any;
	changeScreenToLogin: () => any;
}

export default function ResetScreen({
	changeScreenToRegister,
	changeScreenToLogin,
}: Props): ReactElement {
	return (
		<div>
			<button onClick={changeScreenToRegister}>Register</button>
			<button onClick={changeScreenToLogin}>Login</button>
		</div>
	);
}
