import { Divider, Modal, Typography } from 'antd';
import React, { ReactElement, useState } from 'react';

const {Title,Text} = Typography

type ScreenProps = 'login' | 'register' | 'reset';

interface Props {
	changeScreen: (screen: ScreenProps) => any;
}

export default function RegisterScreen({ changeScreen }: Props): ReactElement {
 

	const [loginmodalvisibility,setloginmodalvisibility] = useState(true)


	return (
		<Modal title={
			<Title level={3} className="text-center text-gray-700">Login in</Title>
		} footer={null} visible={loginmodalvisibility} onCancel={()=> setloginmodalvisibility(false)}>
			<div className="flex flex-col justify-between items-center h-full">
				<div>
					<button className="bg-primary text-white text-md px-14 py-4 rounded-md hover:border-indigo-600 hover:transition w-96">
						Login with GitHub
					</button>
					<Divider className="w-96">
						<Text className="text-gray-500 text-sm">Or login with Google</Text>
					</Divider>
				</div>
				<form className="flex flex-col justify-evenly items-center space-y-6">
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="p-4 border rounded-md w-96 outline-none"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="p-4 border rounded-md w-96 outline-none"
					/>
					<input
						type="submit"
						value="Log in"
						className="cursor-pointer bg-primary text-white text-md px-14 py-4 rounded-md hover:border-indigo-600 hover:transition w-96"
					/>
				</form>
				<div className="text-sm font-normal flex justify-between mt-14 mb-16">
					<span>
						Need an account?
						<a
							className="ml-1 hover:text-primary cursor-pointer"
							onClick={() => changeScreen('register')}
						>
							Register
						</a>
					</span>
					<span>
						<a
							className="text-primary cursor-pointer ml-8"
							onClick={() => changeScreen('reset')}
						>
							Forgot Password?
						</a>
					</span>
				</div>
			</div>
		</Modal>
	);
}
