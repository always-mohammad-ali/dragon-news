import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard/NewsCard';



const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    

    const {id} = useParams();

    const data = useLoaderData();
    console.log(id,data)
    
    useEffect(()=>{
        if(id == "0"){
            setCategoryNews(data);
            return;
        }
        else if(id == "1"){
            const filteredNews = data.filter((news) => news.others.is_today_pick === true);
            setCategoryNews(filteredNews);
            
        }
        else{
            const filteredNews = data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }
        
    },[data, id])

    return (
        <div>
            <h1 className='text-2xl font-semibold ml-4'>Dragon News</h1>
            <h1 className='ml-4 mb-8'>Total <span className='font-bold text-accent text-lg'>{categoryNews.length}</span> news found!</h1>

            <div>
                {
                    categoryNews.map((newsCard) =><NewsCard key={newsCard.id} newsCard={newsCard}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;