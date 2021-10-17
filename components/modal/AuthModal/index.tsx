import React, { ReactElement, useState } from 'react';

import Backdrop from '../Backdrop';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ResetScreen from './ResetScreen';

interface Props {
	handleClose: () => any;
	screenName: 'login' | 'register' | 'reset';
}

export default function AuthModal({
	handleClose,
	screenName,
}: Props): ReactElement {
	const [screen, setScreen] = useState(screenName);
	return (
		<Backdrop onClick={handleClose}>
			<div
				className="h-3/5 bg-white w-577 rounded-3xl flex flex-col justify-center items-center"
				onClick={(e) => e.stopPropagation()}
			>
				{screen === 'login' ? (
					<LoginScreen
						changeScreenToRegister={() => setScreen('register')}
						changeScreenToReset={() => setScreen('reset')}
					/>
				) : screen === 'register' ? (
					<RegisterScreen
						changeScreenToLogin={() => setScreen('login')}
						changeScreenToReset={() => setScreen('reset')}
					/>
				) : (
					<ResetScreen
						changeScreenToRegister={() => setScreen('register')}
						changeScreenToLogin={() => setScreen('login')}
					/>
				)}
			</div>
		</Backdrop>
	);
}
