import { Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dasboard';
import Products from './components/Products/Products';
import ShoppingCart from './containers/ShoppingCart';
import CardDetail from './components/Cards/CardDetail';
import { Switch } from 'react-router-dom'
import Pag404 from './components/Pag404';
import { useAuth0 } from '@auth0/auth0-react';
import EditarUsuario from './components/EditProduct/editProduct';
import List from './components/EditProduct/listProduct';
import IsAuthenticated from './components/Registrar/IsAuthenticated';
import ProtectedRoute from "./ProtectedRoute";
import Nosotros from '../src/components/Footer/Nosotros'
import TransactionUser from './components/Transactions/TransactionUser';
import './index.css'
// import Profile from './components/NavBar/Profile';
import Perfil from './components/Perfil/Perfil.jsx';

function App() {
	const { user, isAuthenticated } = useAuth0();

let userAdmin = useSelector((state) => state.admin);





	return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route exact path='/'>  <Home />  </Route>
				<Route exact path='/products'>	<Products />  </Route>
				<Route exact path="/cart">	<ShoppingCart />  </Route>
				<Route exact path="/team">	<Nosotros />  </Route>
				<Route exact path="/transactions"><TransactionUser/></Route>
				<Route  path="/product/:id">  <CardDetail />  </Route>
				<Route exact path='/users'><Perfil /></Route>
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                
				{/*<ProtectedRoute exact path="/dashboard" component={Dashboard} />*/}
				<Route exact path='/list' > <List/> </Route>
				<Route exact path='/edit/:id' > <EditarUsuario/> </Route>
				{/* <Route path='*' component={Pag404} /> */}


			</Switch>
		</div>
	);
}

export default App;
