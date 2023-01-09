import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

const Perfil = () => {
    const { user, isAuthenticated } = useAuth0();
    //Obtengo el user registrado de auth0 y la función isAuth-

    let usersData = useSelector((state) => state.users);
    // Me traigo el contenido de users que es lo que trae la ruta de getUsers desde la action

    let data; //En data se guarda el mail que viene desde auth0
    if (isAuthenticated === true) {
        data = user.email
    }

    const filteredUser = usersData.filter((users) => users.email === data)[0]


    return (
        <>
            {filteredUser ? (
                <div className='container mx-auto '>
                    <div className='flex py-10 pl-14'>
                        <div className='bg-purple-400 border-purple-800 items-center p-5 border-8 border-opacity-75 border-double'>
                            {
                                user.picture ? (
                                    <img className='pl-6 text-center' src={user.picture} alt='Not Found...' />
                                )
                                    : (
                                        <img className='pl-6' src="../assets/user2.png" alt="" />
                                    )
                            }
                        </div>

                        <div className='flex flex-col px-4 text-black-800  pl-6'>
                            <h1 className='bg-purple-200 font-bold text-center truncate ...'>Nombre de Usuario:
                                <br />
                            </h1>
                            <span className='py-3 text-center font-medium'>{user.name}</span>
                            <div>
                                <h1 className='bg-purple-200 font-bold py-2.5 text-center'>Email:
                                    <br />
                                </h1>
                                <span className='font-medium'>{filteredUser.email}</span>
                            </div>

                        </div>
                        <div className='flex flex-col '>
                            <h1 className='pl-14 font-bold bg-purple-200'>Tu Dirección:
                                <br />
                            </h1>
                            <span className=' py-3 text-center font-medium'>{filteredUser.address}</span>
                            <h1 className='px-14 pt-3 p-2 font-bold bg-purple-200'>
                                Tu Teléfono:
                                <br />
                            </h1>
                            <span className='pl-14 font-medium'>{filteredUser.phone}</span>

                        </div>
                    </div>
                    <div className='bg-purple-600'>
                        <p className=''>⠀</p>
                        <p className='text-white text-center'>⠀⇣ Más Información ⇣</p>
                        <p className=''>⠀</p>
                    </div>
                    {/* 
                    
                    
                    
                    
                    */}
                </div>

            )
                :
                (
                    <div className=' h-screen'>
                        <h1 className='flex justify-center py-5 font-black'>Loading...</h1>
                        <br />
                        <div className='flex justify-center py-14'>
                            <Spinner />
                        </div>
                        <br />
                        <h1 className='flex justify-center font-black'>Please Wait :{')'}</h1>
                    </div>

                )

            }
        </>
    )
}

export default Perfil;


