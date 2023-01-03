import { Redirect, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dasboard'
import Perfil from './components/Perfil'
import IsAuthenticated from '../src/components/Registrar/IsAuthenticated'
import { useAuth0 } from '@auth0/auth0-react';

//let auth;

const ProtectedRoute = ({component:Component,...rest}) => {
  const { user, isAuthenticated } = useAuth0();
  //isAuthenticated --> res --> true / false
  //user --> res --> Object

  
const dataAuth = IsAuthenticated();

  let data;

  //auth=false;
  //auth=true;
  if(isAuthenticated === true){
    data = user.email_verified
  }


  return (
    
    <Route {...rest}>{data? <Dashboard/> : <Perfil/> }</Route>
    
   
    
    
)
}

export default ProtectedRoute

// {/*<Route {...rest}>{data? <Dashboard/> : <Redirect to="/home"/> }</Route>*/}