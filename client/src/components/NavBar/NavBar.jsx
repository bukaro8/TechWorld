import React, { useState, useEffect } from "react";
import Search from '../Search/Search'
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import logos from '../assets/logos.png'
import Carrito from '../assets/Carrito.jsx'

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../Registrar/LoginButton";
import LogoutButton from "../Registrar/LogoutButton";
import Profile from '../Registrar/Profile'
//import user from "../../../../api/models/user";

 import { getUserAdmin, getAllUsers } from "../../Redux/actions";
 import IsAuthenticated from '../Registrar/IsAuthenticated'
//Desde IsAuthenticated me traigo la data de como llega 'user' y el booleano

 
export default function NavBar() {
    const { user, isAuthenticated } = useAuth0(); 

    //Si se llega a generar un formulario unico para administradores, se puede usar este bloque de código
    // ---------------------------------------------------
    //let userAdmin = useSelector((state) => state.admin);
    //console.log(userAdmin, 'userAdmin')    

    //LLama al componente de auth y ejecuta la funcion
    //const dataAuth = IsAuthenticated();
    
    //let data;
    //if(isAuthenticated === true) {
    //data = user.email  //Extraigo el mail que viene de auth0
    //console.log(data,'data')
    //}

    //let mailAdmin;
    //if(userAdmin){
    //mailAdmin = userAdmin.map((e) => e.email)
    //console.log(mailAdmin,'mailAdmin') //extraigo el mail que viene de la db
    //}

    //const verificador = mailAdmin.includes(data) 

    // ------------------------------------------------
    
    //Para formulario de usarios

    let usersData = useSelector((state) => state.users);
    // console.log(usersData,'usersData')
    
    //LLama al componente de auth y ejecuta la funcion
    const dataAuth = IsAuthenticated();
    //console.log(dataAuth,'dataAuth')
    
    let data;
    if(isAuthenticated === true) {
    data = user.email  //Extraigo el mail que viene de auth0
    // console.log(data,'data')
    }


    let isAdminTrue = usersData.map((e)=>e.isAdmin) // devuelve true/false
    console.log(isAdminTrue,'isAdminTrue')


    let mailAdminUser;
    if(isAdminTrue){
    mailAdminUser = usersData.map((e) => e.email)
    // console.log(mailAdminUser,'mailAdminUser') //extraigo el mail que viene de la db
    }


    const verificador = mailAdminUser.includes(data);


     let dispatch = useDispatch();

     //useEffect(() => {
     //    dispatch(getUserAdmin());
     //}, [dispatch]);

     useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
    // const emailAdmin = userAdmin.map((e) => e.email)

    return (

        <div>
            <nav className="bg-white border-gray-200 ">
                <div className="flex flex-wrap justify-around items-center  max-w-full h-fit   py-6 bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 text-white">

                    <Link to="/" class="flex items-center">
                        <img src={logos} className="mr-3 h-9 sm:h-16 rounded-full" alt="Logo" />
                        <span className="self-center text-xl font-bold whitespace-nowrap hover:text-red-700">
                            TechWorld
                        </span>
                    </Link>


                    <div class="links lg:block hidden w-1/6 md:w-4/6 text-lg font-semibold">
                        <ul class="menu flex items-center justify-end gap-5  ">
                            <Link to="/" className="hover:text-red-600">Home</Link>
                            <Link to="/products" className="hover:text-red-600">Products</Link>
                            <Link to="/cart" className="hover:text-red-600">Basket</Link>
                            <Link to="/" className="hover:text-red-600">Account</Link>
                            
                            {
                                verificador  ? 
                                <Link to="/dashboard" className="hover:text-red-600">Dashboard</Link> :
                                null
                            }

                            
                            {
                              isAuthenticated && !verificador ? <Link to="/user" className="hover:text-red-600">User</Link>
                                :
                                false
                            }

                            
                            <Link to="/cart" ><span className="text-gray-900 dark:text-white inline-flex"><Carrito /></span></Link>

                            
                            <Profile />
                                {isAuthenticated ?
                            <LogoutButton />
                            :
                            <LoginButton />
                    }
                        </ul>
                    </div>


                    

                    <div class="block lg:hidden w-1/6 lg:w-4/6">
                        <a href="#" class="link" id="mobile-menu">Menu</a>
                        <ul class="mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800">

                            <Link to="/" className="hover:text-red-600">Home </Link>
                            <Link to="/products" className="hover:text-red-600">Products </Link>
                            <Link to="/" className="hover:text-red-600">Basket </Link>
                            <Link to="/" className="hover:text-red-600">Account </Link>
                            <Link to="/dashboard" className="hover:text-red-600">Dashboard</Link>
                        </ul>
                    </div>
                </div>
            </nav >



            <nav className="bg-gray-50">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <Search />
                </div>
            </nav>



        </div >
    )
}
<div>
    const menuButton = document.querySelector('#mobile-menu');
    menuButton.addEventListener('click', e =&gt; {'{'}
    const menu = document.querySelector('.mobile-links');
    menu.classList.toggle('hidden');
    {'}'});
</div>

