import React from "react";
import logo from "./logo.jpg";
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <header>
            <NavLink to="/home">
                <li>
                    <img src={logo} alt="" />
                </li>
            </NavLink>
            <nav>
                <ul>
                    <div>
                        <NavLink to="/products">
                            <button>PRODUCTS</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/wishlist">
                            <button>WISHLIST</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/cart">
                            <button>CART</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/account">
                            <button>ACCOUNT</button>
                        </NavLink>
                    </div>
                </ul>
            </nav>
        </header>
    )
} 