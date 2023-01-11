import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import icon from '../assets/imagenes/icon.png';
const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	return (
		isAuthenticated && (
			<div>
				<picture>
					{user.picture ? (
						<div className='flex items-center'>
							<img src={user.picture} alt={user.name} referrerpolicy="no-referrer" class='rounded h-9' />
							<h2 className='p-2'>{user.name}</h2>
						</div>
					) : (
						<img src={icon} alt={user.name} class='rounded-full h-9' />
					)}
				</picture>
				{/* <p>{user.email}</p> */}
			</div>
		)
	);
};
export default Profile;
