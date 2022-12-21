import { Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "./helperRoutes";
import Formulario from "../components/Formulario/Create"
import Dashboard from "../components/Dashboard/Dasboard"
import Products from "../components/Products/Products";


const PrivateRoutes = (props) =>{
    return(
<Switch>
            <PrivateRoute exact path = '/products/formulario' component = {Formulario}/>
            <PrivateRoute exact path = '/admin' component = {Dashboard}/>
            <PrivateRoute exact path = "*" render = {()=>{
                return <Redirect to = '/products' component = {Products}/>
            }}/>
        </Switch>
    )
}
export default PrivateRoutes