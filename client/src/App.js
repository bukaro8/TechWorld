import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dasboard';
import Products from './components/Products/Products';
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

				<Route exact path="/cart">
					<ShoppingCart />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
