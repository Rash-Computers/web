import React, { ReactElement } from 'react';

type ScreenProps = 'login' | 'register' | 'reset';

interface Props {
	changeScreen: (screen: ScreenProps) => any;
}

export default function LoginScreen({ changeScreen }: Props): ReactElement {
	return (
		<div>
			<button onClick={() => changeScreen('register')}>Register</button>
			<button onClick={() => changeScreen('reset')}>Reset</button>
		</div>
	);
}
