/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Product from '../Cards/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';

export default function Home() {
  let products = useSelector((state) => state.filteredProducts);
  let dispatch = useDispatch();

  let latestProducts = products.slice(-3);

  useEffect(() => {
    if (!products.length) dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <div>
        <h1>Latest articles</h1>
      </div>
      <div>
        {latestProducts.map((e) => {
          return (
            <Product image={e.images[0].url} name={e.name} price={e.price} />
          );
        })}
      </div>
    </div>
  );
}
