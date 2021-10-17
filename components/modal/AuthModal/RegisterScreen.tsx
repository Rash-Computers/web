import React, { ReactElement } from 'react';

type ScreenProps = 'login' | 'register' | 'reset';

interface Props {
	changeScreen: (screen: ScreenProps) => any;
}

export default function RegisterScreen({ changeScreen }: Props): ReactElement {
	return (
		<div>
			<button onClick={() => changeScreen('login')}>Login</button>
			<button onClick={() => changeScreen('reset')}>Reset</button>
		</div>
	);
}
