import React from 'react';
import { useSelector } from 'react-redux';
import {Route,Redirect} from 'react-router-dom';

function ProtectedRoute(props){

    const isAuth = useSelector(state => state.auth.isAuth);

    if(isAuth === true){
        return (
            <Route path={props.path} component={props.component}/>
        )
    }
    else{
        return ( <Route path={props.path} >
            <Redirect to="/login"/>
        </Route>)
    }

    
}

export default ProtectedRoute;