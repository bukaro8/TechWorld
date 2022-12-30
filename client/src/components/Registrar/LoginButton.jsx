import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<div>
			<button
				className='block  text-base text-white hover:text-red-600 '
				onClick={() => loginWithRedirect()}
			>
				Log In
			</button>
		</div>
	);
};

export default LoginButton;
