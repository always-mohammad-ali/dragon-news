import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className=''>
                <LatestNews></LatestNews>
            </section>

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