import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import'./Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        fetch('products.JSON')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="shop-container">
            <div className="products-container">
               {
                products.map(product=><Product 
                    key={product.key}
                    product={product}
                    ></Product>)
               } 
            </div>
            <div className="cart-container">
                this 
            </div>
            
        </div>
    );
};

export default Shop;