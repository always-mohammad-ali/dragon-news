import React, { use } from 'react';
import { AuthContext } from './authProvider';
import { Navigate, useLocation } from 'react-router';
import Login from '../Pages/Login';
import Loading from '../components/loading/Loading';

const PrivateRoute = ({ children }) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
     return <Loading></Loading>
    }

    if (user && user?.email){
       return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;

    

    
           
};

export default PrivateRoute;