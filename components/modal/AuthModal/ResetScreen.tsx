import React, { ReactElement } from 'react';

type ScreenProps = 'login' | 'register' | 'reset';

interface Props {
	changeScreen: (screen: ScreenProps) => any;
}

export default function ResetScreen({ changeScreen }: Props): ReactElement {
	return (
		<div className="flex flex-col justify-evenly h-full items-center w-4/6">
			<div className="w-full text-center space-y-4">
				<p className="text-xl font-medium">Reset Your Password</p>
				<form
					action=""
					className="flex flex-col justify-evenly items-center space-y-8 w-full"
				>
					<input
						type="email"
						name="email"
						placeholder="Your email address"
						className="p-4 border-textSecondary border rounded-2xl w-full"
					/>
					<input
						type="submit"
						value="Reset Password"
						className="cursor-pointer w-full py-3 text-2xl font-semibold bg-purple-400 px-4 rounded-2xl border border-textSecondary mb-4"
					/>
				</form>
			</div>
			<div className="w-full text-center space-y-4">
				<p className="text-xl font-medium">Or Reauthenticate</p>
				<button className="w-full p-4 text-2xl font-semibold bg-purple-400 rounded-2xl border border-textSecondary mb-6">
					Login with GitHub
				</button>
			</div>
			<p className="text-xl font-medium">
				We will send you a link to reset your password. If you signed up via
				github you need just need to log in again.
			</p>
		</div>
	);
}
