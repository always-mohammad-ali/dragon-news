import React, { use } from 'react';
import { AuthContext } from './authProvider';
import { Navigate } from 'react-router';
import Login from '../Pages/Login';

const PrivateRoute = ({ children }) => {
    const {user} = use(AuthContext);

    if (user && user?.email) {
       return children;
    }
    return <Navigate to="/auth/login"><Login></Login></Navigate>;

    

    
           
};

export default PrivateRoute;