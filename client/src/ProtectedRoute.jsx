import { Redirect, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dasboard'

let auth;


const ProtectedRoute = ({component:Component,...rest}) => {
  auth=false;
  auth=true;
  return (
    <Route {...rest}>{auth?<Component/>:<Redirect to="/home"/>}</Route>

)
}

export default ProtectedRoute