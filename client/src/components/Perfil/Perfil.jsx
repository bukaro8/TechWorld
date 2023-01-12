import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import altImg from '../assets/imagenes/icon.png';
const Perfil = (_) => {
	const { user, isAuthenticated } = useAuth0();
	//Obtengo el user registrado de auth0 y la función isAuth-

	// Me traigo el contenido de users que es lo que trae la ruta de getUsers desde la action

	// console.log(usersData)
	let data; //En data se guarda el mail que viene desde auth0
	if (isAuthenticated === true) {
		data = user.email;
	}

	let usersData = useSelector((state) => state.users);

	// console.log(usersData, 'usersData');

	const filteredUser = usersData.filter((users) => users.email === data)[0];

	// console.log(filteredUser, 'filteredUser');

	return (
		<>
			{filteredUser ? (
				<div className='flex flex-col '>
					<div className='flex  justify-center flex-col items-center'>
						<div
							style={{
								background: 'rgb(33,25,60)',
								background:
									'linear-gradient( rgba(33,25,60,1) 14%, rgba(49,10,174,1) 59%, rgba(80,67,227,1) 81%)',
							}}
							className='h-36 w-screen relative'
						>
							{user.picture ? (
								<picture className=''>
									<img
										className=' max-w-full text-center rounded-full absolute -bottom-10 right-0 left-0 m-auto '
										src={user.picture}
										alt='Not Found...'
									/>
								</picture>
							) : (
								<picture>
									<img
										className=' max-w-full text-center rounded-full'
										src={altImg}
										alt='Not Found...'
									/>
								</picture>
							)}
						</div>

						<div className='flex mt-20 shadow-md w-3/4 h-20 justify-around '>
							<div className='flex  flex-col justify-around   w-48'>
								<h1 className='bg-purple-200 font-bold text-center  rounded-full'>
									UserName:
								</h1>
								<span className=' text-center font-medium '>{user.name}</span>
							</div>

							<div className='flex flex-col justify-around   w-48'>
								<h1 className='bg-purple-200 font-bold text-center  rounded-full'>
									Email:
								</h1>
								<span className='font-medium '>{user.email}</span>
							</div>
							<div className='flex  flex-col justify-around   w-48 '>
								<h1 className='bg-purple-200 font-bold text-center  rounded-full '>
									Address:
								</h1>
								<span className='  font-medium text-center'>
									{filteredUser.address
										? filteredUser.address
										: 'Not added jet'}
								</span>
							</div>
							<div className='flex  flex-col justify-around    w-48'>
								<h1 className='bg-purple-200 font-bold text-center  rounded-full'>
									Phone:
								</h1>
								<span className='font-medium text-center '>
									{filteredUser.phone ? filteredUser.phone : 'Not added jet'}
								</span>
							</div>
						</div>
					</div>
					{/* <div className='bg-purple-600'>
						<p className=''>⠀</p>
						<p className='text-white text-center'>⠀⇣ Más Información ⇣</p>
						<p className=''>⠀</p>
					</div>
					<div className='flex border-4 border-purple-600 text-white p-4 flex-row pl-5 pr-5 font-medium'>
						<button className='bg-purple-500 grow h-10 border-4 border-purple-900 font-medium'>
							Change Password
						</button>
						⠀ ⠀ ⠀ ⠀
						<button className='bg-purple-500 grow h-10 border-4 border-purple-900'>
							Change Email
						</button>
					</div> */}
				</div>
			) : (
				<div className=' h-screen'>
					<h1 className='flex justify-center py-14 font-black'>Loading...</h1>
					<br />
					<div className='flex justify-center py-14'>
						<Spinner />
					</div>
					<br />
					<h1 className='flex justify-center font-black py-14'>
						Please Wait :
					</h1>
				</div>
			)}
		</>
	);
};

export default Perfil;
