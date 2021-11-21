import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <>
      <h2 className="text-center mt-3">Products</h2>
      <section className="py-4 container">
        <div className="row justify-content-center">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
        </div>
      </section>
    </>
  );
}
