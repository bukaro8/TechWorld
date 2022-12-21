import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import Home from '../components/Home/Home'
import Page404 from '../components/404/404';
import  IsAuthenticated  from '../components/Registrar/IsAuthenticated';

export const PrivateRoute =({component, ...options}) => {
const isAuth = IsAuthenticated();
if(isAuth) return <Route {...options} component={ Home }/>
return <Redirect to = '/404' component={ Page404 }/>
}

export const PublicRoute =({component, ...options}) => {
    const isAuth = IsAuthenticated();
    if(!isAuth) return <Route {...options} component={component}/>
    return <Redirect to = '/404' component={ Page404 }/>
    }