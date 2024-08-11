import './index.css'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/b8cbf40a-49bf-49bd-b47f-69b311cdf59a')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    if (products.length === 0) return <div>Loading...</div>;

    return (
        
        <div className='product-container'>
            {products.map((product, index) => (
                <div key={index} className='product-div'>
                     <img src={product.image_url} alt={product.product_name} className='product-image' />
                    <h2>{product.product_name}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
