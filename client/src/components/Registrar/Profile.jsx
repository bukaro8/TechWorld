import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	return (
		isAuthenticated && (
			<div className='text-white flex flex-col justify-center items-center'>
				<picture>
					<img src={user.picture} alt={user.name} class='rounded-full  h-12 ' />
				</picture>

				<p className='text-sm'>{user.email}</p>
			</div>
		)
	);
};
export default Profile;
