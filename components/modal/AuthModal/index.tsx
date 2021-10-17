import React, { ReactElement } from 'react';

import Backdrop from '../Backdrop';

interface Props {
	handleClose: () => any;
}

export default function AuthModal({ handleClose }: Props): ReactElement {
	return (
		<Backdrop onClick={handleClose}>
			<div onClick={(e) => e.stopPropagation()}>hey</div>
		</Backdrop>
	);
}
