import Link from 'next/link';
import React, { ReactElement, useState } from 'react';

import AuthModal from '../../modal/AuthModal';

type ScreenProps = 'login' | 'register' | 'reset';

export default function NavBar(): ReactElement {
	const [modal, setModal] = useState(false);
	const [screen, setScreen] = useState<ScreenProps>('login');

	const openModal = (screen: ScreenProps) => {
		setScreen(screen);
		setModal(true);
	};
	const closeModal = () => setModal(false);

	return (
		<nav className="sticky top-0 h-16 w-screen bg-white px-28 flex justify-between items-end py-1 text-textSecondary font-bold text-xl">
			<div>
				<Link href="/">
					<a>
						Rash <span className="text-primary">Computers</span>
					</a>
				</Link>
			</div>
			<div className="space-x-9">
				<Link href="/programs">
					<a className="font-bold">Programs</a>
				</Link>
				<button
					onClick={() => (modal ? closeModal() : openModal('register'))}
					className="font-bold"
				>
					Create Account
				</button>
				<button
					onClick={() => (modal ? closeModal() : openModal('login'))}
					className="font-bold"
				>
					Login
				</button>
			</div>

			{modal && <AuthModal screenName={screen} handleClose={closeModal} />}
		</nav>
	);
}
