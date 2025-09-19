import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';


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
            
             {/* You can give all children border by using this => *:border inside class */}
            <main className='w-11/12 mx-auto  grid grid-cols-12'>
                
                
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>

                <section className="main-section col-span-6 mr-5">
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayout;