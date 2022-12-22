import React from 'react';

const Product = (props) => {
    // console.log(props.Product)
    const {name, img, seller,wholePrice,star} = props.product;
    return (
        <div>
           <img src={img} alt= "" ></img>
        </div>
    );
};

export default Product;