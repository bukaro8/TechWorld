/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Product from '../Cards/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';

import gif from '../assets/gif.png'

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
        <img src={gif} className="flex flex-wrap mx-auto w-11/12  py-7 mt-2 " />
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
