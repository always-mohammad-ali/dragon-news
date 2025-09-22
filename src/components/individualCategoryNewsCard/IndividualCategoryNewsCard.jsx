import React from 'react';
import { Link } from 'react-router';

const IndividualCategoryNewsCard = ({individualNewsData}) => {

    const {title, image_url, details, category_id} = individualNewsData;
    return (
        <div className='flex flex-col justify-center'>
            <img className='w-1/2 mx-auto' src={image_url} alt="" />
            <h2 className='text-2xl font-semibold my-5'>{title}</h2>
            <p className='text-secondary'>{details}</p>
            <Link className='btn btn-accent text-white my-3 w-1/4 mx-auto' to={`/category/${category_id}`}>Back to category</Link>
        </div>
    );
};

export default IndividualCategoryNewsCard;