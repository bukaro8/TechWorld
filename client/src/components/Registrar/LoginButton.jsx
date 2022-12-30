import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<div>
			<button
				className='block px-4 py-2 text-lg text-white hover:bg-blue-100 '
				onClick={() => loginWithRedirect()}
			>
				Log In
			</button>
		</div>
	);
};

export default LoginButton;
