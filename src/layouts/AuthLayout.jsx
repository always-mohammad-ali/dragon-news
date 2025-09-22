import React from 'react';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';


const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>

            <div>
                 <Outlet></Outlet>
            </div>
            
            
        </div>
    );
};

export default AuthLayout;