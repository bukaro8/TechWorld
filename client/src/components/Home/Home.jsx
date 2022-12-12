/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Product from '../Cards/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';
import Paginated from '../Paginated/Paginated';
import Filtros from '../Filtros/Filtros'

import gif from '../assets/gif.png'

export default function Home() {
  let dispatch = useDispatch();
  useEffect(() => {
    if (!products.length) dispatch(getAllProducts());
  }, [dispatch]);

  let products = useSelector((state) => state.filteredProducts);

  let latestProducts = products.slice(-8);

  return (
    <div>
      <Filtros />
      <div>
        <img src={gif} className="flex flex-wrap mx-auto w-11/12 m-8 " />
      </div>
      {/* <div class="flex  items-stretch  -mx-4"> */}
      <div className="grid grid-cols-1 m-16 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {latestProducts.map((e) => {
          return (
            <Product key={e.id} image={e.images[0].url} name={e.name} price={e.price} />
          );
        })}

      </div>
    </div>
  );
}
