import React from "react";
// import logo from "./logo.jpg";
import { NavLink } from "react-router-dom"
import Search from '../Search/Search'
import { Link } from "react-router-dom";
import logos from '../assets/logos.png'
import Carrito from '../assets/Carrito.jsx'

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../Registrar/LoginButton";
import LogoutButton from "../Registrar/LogoutButton";
import Profile from '../Registrar/Profile'


// modal


export default function NavBar({ cerrarModal }) {
    const { user, isAuthenticated } = useAuth0();

/**
 *     // let userAdmin = useSelector((state) => state.admin);

    // let dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getUserAdmin());
    // }, [dispatch]);

    // const emailAdmin = userAdmin.map((e) => e.email)
    // const userEmailAdmin = user.email;

    // console.log("ADADADDA",emailAdmin);
    // console.log("AAADMIN", userAdmin);
    // console.log("UUSER",user.email);
 */

    return (

        <div>
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
                            <Link to="/" className="hover:text-red-600">Home</Link>
                            <Link to="/products" className="hover:text-red-600">Products</Link>
                            <Link to="/" className="hover:text-red-600">Basket</Link>
                            <Link to="/" className="hover:text-red-600">Account</Link>
                            <Link to="/dashboard" className="hover:text-red-600">Dashboard</Link>
                            <Link to="/" ><span className="text-gray-900 dark:text-white inline-flex"><Carrito /></span></Link>
                            <Link to="/dashboard" className="hover:text-red-600">Dashboard</Link>
                            <Link to="/cart" ><span className="text-gray-900 dark:text-white inline-flex"><Carrito /></span></Link>

                        </ul>
                    </div>


                    <Profile />
                    {isAuthenticated ?
                        <LogoutButton />
                        :
                        <LoginButton />
                    }

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


/**
 * import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Admin, Analytics, Dashboard, Home, Landing } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  const login = () =>
    setUser({
      id: 1,
      name: "John",
      permissions: ["analize"],
      roles: ["admin"],
    });
  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Navigation />

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.permissions.includes("analize")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;

 */

