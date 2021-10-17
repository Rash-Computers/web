import React, { ReactElement } from 'react';

interface Props {
	changeScreenToLogin: () => any;
	changeScreenToReset: () => any;
}

export default function RegisterScreen({
	changeScreenToLogin,
	changeScreenToReset,
}: Props): ReactElement {
	return (
		<div className="">
			<button onClick={changeScreenToLogin}>Login</button>
			<button onClick={changeScreenToReset}>Reset</button>
		</div>
	);
}
