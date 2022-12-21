import Home from "../components/Home/Home"
import Products from "../components/Products/Products"
import Formulario from "../components/Formulario/Create"
import Dashboard from "../components/Dashboard/Dasboard"
import Registrar from "../components/Registrar/LoginButton"
import  IsAuthenticated from "../components/Registrar/IsAuthenticated"
import { Redirect, Switch } from "react-router-dom"
import  PublicRoute  from "../Routes/publicRoute"
import  PrivateRoute  from "../Routes/privateRoute"
import { Route } from "react-router-dom"

const Routes = ()=>{
const isAuth = IsAuthenticated();
return(
    <Switch>
        <PublicRoute exact path = "/home" component={Home}/>
        <PublicRoute exact path = "/products" component={Products}/>
        <PublicRoute exact path = "/login" component={Registrar}/>
        <PrivateRoute exact path = "/products/formulario" component={Formulario}/>
        <PrivateRoute exact path = "/admin" component={Dashboard}/>
        <Route exact path ="*" render={() => {
          return <Redirect to={isAuth ? '/home' : '/login'}/>
        }}/>
    </Switch>
)
}

export default Routes