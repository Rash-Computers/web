import React, { ReactElement } from 'react';

type ScreenProps = 'login' | 'register' | 'reset';

interface Props {
	changeScreen: (screen: ScreenProps) => any;
}

export default function ResetScreen({ changeScreen }: Props): ReactElement {
	return (
		<div>
			<button onClick={() => changeScreen('register')}>Register</button>
			<button onClick={() => changeScreen('login')}>Login</button>
		</div>
	);
}
