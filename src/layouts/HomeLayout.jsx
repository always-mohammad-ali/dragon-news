import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';


const HomeLayout = () => {
    return (
        <div>
            <header className='mt-10'>
                <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto'>
                  <Navbar></Navbar>
            </nav>
            </header>
            

            <main>
                
                <section className="left-section"></section>
               

                <section className="main-section">
                    <Outlet></Outlet>
                </section>

                <section className="right-section"></section>
            </main>
        </div>
    );
};

export default HomeLayout;