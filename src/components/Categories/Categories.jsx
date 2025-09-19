import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('./../../../public/categories.json').then(res => res.json());

const Categories = () => {

    const categories = use(categoryPromise);

    return (
        <div>
            <h3>All Categories {categories.length}</h3>
            <div className='grid grid-cols-1 gap-5 mt-9 w-1/2'>
                {
                    categories.map((category) => (
                    <NavLink 
                         key={category.id} 
                         className={({isActive})=>isActive ? 'bg-accent px-3 py-2 text-white font-semibold' : 'hover:bg-gray-200 py-2 px-3' }
                         to={`/category/${category.id}`}>

                         {category.name}
                    </NavLink>
                    )
               ) }
            </div>
        </div>
    );
};

export default Categories;