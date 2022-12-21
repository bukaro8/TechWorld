/*
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dasboard';
import Products from './components/Products/Products';
import './index.css';

function App() {

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <NavBar />
          <Home />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>

      </Switch>
    </div>
  );

}

export default App;
*/

/**
 * import { Route, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dasboard';
import Products from './components/Products/Products';
import ShoppingCart from './containers/ShoppingCart' 
import ShoppingCart from './containers/ShoppingCart';
import {Switch} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

import './index.css'

function App() {
	const { user, isAuthenticated } = useAuth0();
	console.log("USEER",user);
	return (
		<div className='App'>
			<Switch>
@@ -16,9 +22,13 @@ function App() {
				<Route exact path='/products'>
					<Products />
				</Route>
        <Route exact path="/cart">
          <ShoppingCart />
        </Route>
				<Route exact path='/dashboard'>
					<Dashboard />
				</Route>

				<Route exact path="/cart">
					<ShoppingCart />
				</Route>
			</Switch>
		</div>
	);
 */


  /*import { useState } from "react";
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
import  IsAuthenticated from "../src/components/Registrar/IsAuthenticated"
//import { Route, Switch } from 'react-router-dom';
import Routes from './Routes/routes';


function App(props){
 const isAuth = IsAuthenticated();
  return(
    <div className='App'>
      <Routes/>
    </div>
  )
}

export default App;
