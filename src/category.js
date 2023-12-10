
import React from 'react';
import Product from './product';

const Category = ({ title, products }) => {
  function calculateSum() {
    const sum = products?.reduce((total, current) => total + Number(current.quantity), 0);
    return sum;
  }
  return (
    <div style={{padding:20}}>
      <h2>{title}-{calculateSum()}</h2>
      {products.map((product) => (
        <Product key={product.id} name={product.name} quantity={product.quantity} />
      ))}
    </div>
  );
};

export default Category;
 