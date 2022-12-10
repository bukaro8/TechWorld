import React from "react";
// import logo from "./logo.jpg";
import { NavLink } from "react-router-dom"
import Search from '../Search/Search'
import { Link } from "react-router-dom";
import logos from '../assets/logos.png'


export default function NavBar() {
    return (

        <div>
            <nav className="bg-white border-gray-200 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-full px-4 md:px-6 py-6 mt-2 bg-violet-600">
                    <a href="/" className="flex items-center">
                        <img src={logos} className="mr-3 h-9 sm:h-16 rounded-full" alt="nada" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">
                            TechWorld
                        </span>
                    </a>
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-10 text-sm font-medium items-center">
                            <li>
                                <Link to="/">
                                    <a
                                        href="#"
                                        className="text-gray-900 hover:underline text-lg"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <a href="#" className="text-gray-900 hover:underline text-lg">
                                        Save
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <a href="#" className="text-gray-900  hover:underline text-lg">
                                        Basket
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <a href="#" className="text-gray-900  hover:underline text-lg">
                                        Account
                                    </a>
                                </Link>

                            </li>
                            <li>
                                <Link to="#">
                                    <a
                                        href="#"
                                        className="text-gray-900 dark:text-white m-0 inline-flex text-lg"
                                    >
                                    </a>
                                </Link>
                            </li>
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