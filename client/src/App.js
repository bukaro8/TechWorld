import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dasboard';
import Products from './components/Products/Products';
import ShoppingCart from './containers/ShoppingCart';
import CardDetail from './components/Cards/CardDetail';
import { Switch } from 'react-router-dom';
import Pag404 from './components/Pag404';
import { useAuth0 } from '@auth0/auth0-react';

import ProtectedRoute from './ProtectedRoute';

import './index.css';

function App() {
	return (
		<div className='App '>
			<NavBar />
			<Home />
			<Switch>
				<Route exact path='/products'>
					{' '}
					<Products />{' '}
				</Route>
				<Route exact path='/cart'>
					{' '}
					<ShoppingCart />{' '}
				</Route>
				<Route path='/product/:id'>
					{' '}
					<CardDetail />{' '}
				</Route>

				<ProtectedRoute exact path='/dashboard' component={Dashboard} />
				{/* <Route path='*' component={Pag404} /> */}
			</Switch>
		</div>
	);
}

export default App;
