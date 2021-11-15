import React, { ReactElement, useState } from 'react';
import { Divider, Modal, Typography } from 'antd';


const  {Title, Text} = Typography

type ScreenProps = 'login' | 'register' | 'reset';

interface Props {
	changeScreen: (screen: ScreenProps) => any;
}

export default function RegisterScreen({ changeScreen }: Props): ReactElement {

	const [registermodalvisibility,setregistermodalvisibility] = useState(true)

	return (

		<Modal title={
			<Title level={3} className="text-center text-gray-700">Create an account</Title>
		} footer={null} visible={registermodalvisibility} onCancel={()=> setregistermodalvisibility(false)}>
			<div className="flex flex-col justify-between items-center h-full">
				<div>
					<button className="bg-primary text-white text-md px-14 py-4 rounded-md hover:border-indigo-600 hover:transition w-96">
						Sign with GitHub
					</button>
					<Divider className="w-96">
						<Text className="text-gray-500 text-sm">Or sign in with Google</Text>
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
						type="text"
						name="name"
						placeholder="Name"
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
						value="Sign Up"
						className="cursor-pointer bg-primary text-white text-md px-14 py-4 rounded-md hover:border-indigo-600 hover:transition w-96"
					/>
				</form>
				<div className="text-sm font-normal justify-between mt-8 mb-16">
					<span>
						Have an account?
						<a
							className="ml-2 hover:text-primary cursor-pointer"
							onClick={() => changeScreen('login')}
						>
							Login
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
