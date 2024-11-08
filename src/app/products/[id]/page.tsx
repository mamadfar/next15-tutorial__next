import React from 'react';

const Product = async ({params}: {params: {id: string}}) => {

    const {id} = await params

    return (
        <div>
            <h1>Product: {id}</h1>
        </div>
    );
};

export default Product;
