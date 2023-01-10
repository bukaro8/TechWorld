import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import icon from '../assets/imagenes/icon.png';
const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	console.log(user.picture);
	return (
		isAuthenticated && (
			<div>
				<picture>
					{user.picture ? (
						<img src={user.picture} alt={user.name} class='rounded-full h-9' />
					) : (
						<img src={icon} alt={user.name} class='rounded-full h-9' />
					)}
				</picture>
				{/* <h2>{user.name}</h2> */}
				{/* <p>{user.email}</p> */}
			</div>
		)
	);
};
export default Profile;
