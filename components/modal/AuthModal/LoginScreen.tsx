import React, { ReactElement } from 'react';

type ScreenProps = 'login' | 'register' | 'reset';

interface Props {
	changeScreen: (screen: ScreenProps) => any;
}

export default function RegisterScreen({ changeScreen }: Props): ReactElement {
	return (
		<div className="flex flex-col justify-evenly h-full">
			<div>
				<button className="w-full py-3 text-4xl font-semibold bg-purple-400 px-4 rounded-2xl border border-textSecondary mb-6">
					Login with GitHub
				</button>
				<div className="w-full flex items-center justify-center space-x-4">
					<div className="bg-textSecondary w-1/6 h-[2px]"></div>
					<span>or login with email</span>
					<div className="bg-textSecondary w-1/6 h-[2px]"></div>
				</div>
			</div>
			<form className="flex flex-col justify-evenly items-center space-y-6">
				<input
					type="email"
					name="email"
					placeholder="Email"
					className="p-4 border-textSecondary border rounded-2xl w-full"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					className="p-4 border-textSecondary border rounded-2xl w-full"
				/>
				<input
					type="submit"
					value="Sign Up"
					className="cursor-pointer w-full py-3 text-4xl font-semibold bg-purple-400 px-4 rounded-2xl border border-textSecondary mb-4"
				/>
			</form>
			<div className="text-sm font-normal flex justify-between">
				<span>
					Need an account?
					<a
						className="ml-3 hover:text-primary cursor-pointer"
						onClick={() => changeScreen('register')}
					>
						Register
					</a>
				</span>
				<span>
					<a
						className="text-primary cursor-pointer"
						onClick={() => changeScreen('reset')}
					>
						Forgot Password?
					</a>
				</span>
			</div>
		</div>
	);
}
