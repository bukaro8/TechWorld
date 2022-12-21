import { Redirect,Switch } from "react-router-dom"
import { PublicRoute } from "./helperRoutes";
import Products from "../components/Products/Products";
import Home from "../components/Home/Home";


const PublicRoutes = () => {
    return(
        <Switch>
            <PublicRoute exact path = '/home' component = {Home}/>
            <PublicRoute exact path = '/products' component = {Products}/>
            <PublicRoute exact path = "*" render = {()=>{
                return <Redirect to = '/home' component = {Products}/>
            }}/>
        </Switch>
    )
} 
export default PublicRoutes;