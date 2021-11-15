import React, { ReactElement, useState } from 'react';

import Backdrop from '../Backdrop';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ResetScreen from './ResetScreen';

type ScreenProps = 'login' | 'register' | 'reset';

interface Props {
	handleClose: () => any;
	screenName: ScreenProps;
}

export default function AuthModal({
	handleClose,
	screenName,
}: Props): ReactElement {
	const [screen, setScreen] = useState(screenName);

	return (
		<Backdrop onClick={()=> null}>
			{/* <div
				className="h-3/5 bg-white w-577 rounded-3xl flex flex-col justify-center items-center"
				onClick={(e) => e.stopPropagation()}
			> */}
				{screen === 'login' ? (
					<LoginScreen changeScreen={(screen) => setScreen(screen)} />
				) : screen === 'register' ? (
					<RegisterScreen changeScreen={(screen) => setScreen(screen)} />
				) : (
					<ResetScreen changeScreen={(screen) => setScreen(screen)} />
				)}
			{/* </div> */}
		</Backdrop>
	);
}
