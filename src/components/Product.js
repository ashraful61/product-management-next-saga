import React from 'react';

const Product = ({product}) => {
    const { name, description, price, status } = product
    return (
        <div className='p-12 border-2 mb-5'>
            <div className='font-bold text-3xl'>Name:{name}</div>
            <div className='my-4'>{description}</div>
            <p>Price:${price}</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default Product;