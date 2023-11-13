
import React from 'react';
import Product from './product';

const Category = ({ title, products }) => {
  function calculateSum() {
    const sum = products?.reduce((total, current) => total + Number(current.quanity), 0);
    return sum;
  }
  return (
    <div style={{padding:20}}>
      <h2>{title}-{calculateSum()}</h2>
      {products.map((product) => (
        <Product key={product.id} name={product.name} quanity={product.quanity} />
      ))}
    </div>
  );
};

export default Category;
 