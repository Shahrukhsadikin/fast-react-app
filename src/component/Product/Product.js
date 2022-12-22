import React from 'react';
import './Prodect.css'
const Product = (props) => {
    // console.log(props.Product)
    const {name, img, seller,wholePrice,star} = props.product;
    return (
        <div className='product'>
           <img src={img} alt= "" ></img>
           <h6>{ name}</h6>

        </div>
    );
};

export default Product;