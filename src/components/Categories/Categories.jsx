import React, { use } from 'react';

const categoryPromise = fetch('./../../../public/categories.json').then(res => res.json());

const Categories = () => {

    const categories = use(categoryPromise);

    return (
        <div>
            <h3>All Categories {categories.length}</h3>
        </div>
    );
};

export default Categories;