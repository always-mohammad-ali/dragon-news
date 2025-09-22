import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import RightAside from '../components/HomeLayout/RightAside';
import IndividualCategoryNewsCard from '../components/individualCategoryNewsCard/IndividualCategoryNewsCard';

const IndividualCategoryNews = () => {

    const newsData = useLoaderData();
    console.log(newsData)

    const { id } = useParams();

    const [individualNewsData, setIndividualNewsData] = useState({});

    useEffect(()=>{
        const newsDetails = newsData.find((singleNews) => singleNews.id == id);
        setIndividualNewsData(newsDetails)
        
    },[newsData, id])

    console.log(individualNewsData);


    return (
        <div className='w-11/12 mx-auto'>
            <header className='my-10'>
                <Header></Header>
            </header>
            <nav className=''>
                <Navbar></Navbar>
            </nav>

            <main className='grid grid-cols-12'>
                <section className='col-span-9'>
                    <IndividualCategoryNewsCard individualNewsData={individualNewsData}></IndividualCategoryNewsCard>
                </section>
                
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>

        </div>
    );
};

export default IndividualCategoryNews;