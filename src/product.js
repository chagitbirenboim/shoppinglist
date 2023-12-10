
import React from 'react';

const Product = ({ name ,quantity}) => {
return <div style={{textAlign:"center"}}>{name} {quantity>1?quantity:''}</div>
};

export default Product;
