import React from 'react';
import { NavLink } from 'react-router';
import userProfile from './../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mb-10'>
            <div></div>
            <div className='flex gap-5'>
                <NavLink to='/' className={({isActive}) => isActive ? 'bg-accent px-4 py-1 text-white' : ''}>Home</NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? 'bg-accent px-4 py-1 text-white' : ''}>About</NavLink>
                <NavLink to='/career' className={({isActive}) => isActive ? 'bg-accent px-4 py-1 text-white' : ''}>Career</NavLink>
            </div>
            <div className='flex gap-5 items-center my-5'>
                <img src={userProfile} alt="" className='' />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;