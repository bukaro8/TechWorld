import React from "react";
// import logo from "./logo.jpg";
import { NavLink } from "react-router-dom"
import Search from '../Search/Search'
import { Link } from "react-router-dom";
import logos from '../assets/logos.png'
import Carrito from '../assets/Carrito.jsx'
import Formulario from '../Formulario/Create'

// modal
import { useModal } from '../assets/modal/useModal'
import Modal from '../assets/modal/Modal'


export default function NavBar({ cerrarModal }) {
    const [isOpenModal, openModal, closeModal] = useModal(false);

    return (

        <div>
            <div>

            </div>
            <nav className="bg-white border-gray-200 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-full h-fit px-4 md:px-6 py-6 mt-2 bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600">

                    <Link to="/" class="flex items-center">
                        <img src={logos} className="mr-3 h-9 sm:h-16 rounded-full" alt="nada" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-red-700">
                            TechWorld
                        </span>
                    </Link>


                    <div class="links lg:block hidden w-1/6 md:w-4/6">
                        <ul class="menu flex items center justify-end gap-5 text-xl font-bold ">
                            <button className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={openModal}>Create Product</button>
                            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                                <Formulario closeModal={closeModal} cerrarModal={cerrarModal} />
                            </Modal>
                            <Link to="/" className="hover:text-red-600">Home</Link>
                            <Link to="/products" className="hover:text-red-600">Products</Link>
                            <Link to="/" className="hover:text-red-600">Create</Link>
                            <Link to="/" className="hover:text-red-600">Basket</Link>
                            <Link to="/" className="hover:text-red-600">Account</Link>
                            <Link to="/" ><span className="text-gray-900 dark:text-white inline-flex"><Carrito /></span></Link>
                            <Link to="/" className=""></Link>

                        </ul>
                    </div>

                    <div class="block lg:hidden w-1/6 lg:w-4/6">
                        <a href="#" class="link" id="mobile-menu">Menu</a>
                        <ul class="mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800">

                            <Link to="/" className="hover:text-red-600">Home </Link>
                            <Link to="/products" className="hover:text-red-600">Products </Link>
                            <Link to="/" className="hover:text-red-600">Basket </Link>
                            <Link to="/" className="hover:text-red-600">Account </Link>
                            <Link to="/" className="hover:text-red-600"></Link>

                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <Search />
                </div>
            </nav>
        </div>

    )
}

<div>
    const menuButton = document.querySelector('#mobile-menu');
    menuButton.addEventListener('click', e =&gt; {'{'}
    const menu = document.querySelector('.mobile-links');
    menu.classList.toggle('hidden');
    {'}'});
</div>

