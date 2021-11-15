import { Divider, Modal , Typography} from 'antd';
import React, { ReactElement, useState } from 'react';

const {Title, Text} = Typography


type ScreenProps = 'login' | 'register' | 'reset';

interface Props {
	changeScreen: (screen: ScreenProps) => any;
}

export default function ResetScreen({ changeScreen }: Props): ReactElement {

	const [resetmodalvisibility,setresetmodalvisibility] = useState(true)



	return (
		<Modal title={
			<Title level={3} className="text-center text-gray-700 text-xl">Reset Your Password</Title>
		} footer={null} visible={resetmodalvisibility}  onCancel={()=> setresetmodalvisibility(false)}>
			<div className="flex flex-col justify-between items-center h-full">
				<div className="w-full text-center space-y-4">
					<form
						action=""
						className="flex flex-col justify-evenly items-center space-y-8 w-full"
					>
						<input
							type="email"
							name="email"
							placeholder="Your email address"
							className="p-4 border rounded-md w-96 outline-none"
						/>
						<input
							type="submit"
							value="Reset Password"
							className="cursor-pointer bg-primary text-white text-md px-14 py-4 rounded-md hover:border-indigo-600 hover:transition w-96"
						/>
					</form>
				</div>
				<div className="w-full text-center space-y-4">

					<Divider className="w-2/3">
						<Text className="text-gray-500 text-sm">Or Reauthenticate</Text>
					</Divider>
					<button className="cursor-pointer bg-primary text-white text-md px-14 py-4 rounded-md hover:border-indigo-600 hover:transition w-96">
						Login with GitHub
					</button>
				</div>
				<p className="text-sm text-center mb-8 w-96 mt-8 font-normal">
					We will send you a link to reset your password. If you signed up via
					github you need just need to log in again.
				</p>
			</div>
		</Modal>
	);
}
