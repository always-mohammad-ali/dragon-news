import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userProfile from './../../assets/user.png'
import { AuthContext } from '../../provider/authProvider';


const Navbar = () => {
    const {user, logOutUser} = use(AuthContext);

    const handleLogOut = () =>{
         logOutUser().then(()=>{
                 alert('You have logged out successfully');
               })
               .catch((error) =>{
                 console.log(error)
               })
    }
    return (
        <div className='flex justify-between items-center mb-10'>
            <div>
                {
                    user && <p>{user.email}</p>
                }
            </div>
            <div className='flex gap-5'>
                <NavLink to="/" className={({isActive}) => isActive ? 'bg-accent px-4 py-1 text-white' : ''}>Home</NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? 'bg-accent px-4 py-1 text-white' : ''}>About</NavLink>
                <NavLink to='/career' className={({isActive}) => isActive ? 'bg-accent px-4 py-1 text-white' : ''}>Career</NavLink>
            </div>
            <div className='flex gap-5 items-center my-5'>
                <img src={userProfile} alt="" className='' />
                
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-8'>Log Out</button> : <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;