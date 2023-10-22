import React from 'react';

export const LargeProductList = ( { product } ) => {
    const { name, price, description, rating } = product;
    return (
        <>
            <h3>Name: { name }</h3>
            <p>Price: { price }</p>
            <p>Description: { description }</p>
            <h3>Rating: { rating }</h3>
        </>
    );
};
