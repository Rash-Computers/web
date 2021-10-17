import Link from 'next/link';
import React, { ReactElement, useState } from 'react';

import AuthModal from '../../modal/AuthModal';

export default function NavBar(): ReactElement {
	const [modal, setModal] = useState(false);

	const openModal = () => setModal(true);
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
					onClick={() => (modal ? closeModal() : openModal())}
					className="font-bold"
				>
					Create Account
				</button>
				<button className="font-bold">Login</button>
			</div>

			{modal && <AuthModal handleClose={closeModal} />}
		</nav>
	);
}
