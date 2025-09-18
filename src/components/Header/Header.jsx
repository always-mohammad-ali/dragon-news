import React from 'react';
import logo from './../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <img src={logo} alt="" />
            <p className='text-secondary'>Journalism Without Fear or Favour</p>
            <p className='text-secondary'>{format(new Date(), "EEEE , MMMM dd yyyy")}</p>
        </div>
    );
};

export default Header;