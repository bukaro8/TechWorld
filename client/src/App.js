import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ShoppingCart from './containers/ShoppingCart' 
import './index.css'

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
        <Route exact path="/cart">
          <ShoppingCart />
        </Route>
			</Switch>
		</div>
	);
}

export default App;
