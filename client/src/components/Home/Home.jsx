/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Product from '../Cards/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';
import Carrusel from '../assets/Carrusel/Carrusel';

import { Filtros, applyFilters } from '../Filtros/Filtros'

export default function Home({ }) {


  let products = useSelector((state) => state.allProducts);
  let dispatch = useDispatch();
  useEffect(() => {
    if (!products.length) dispatch(getAllProducts());
  }, [dispatch]);
  let allProducts = useSelector((state) => state.allProducts);
  let searchName = useSelector((state) => state.searchName);
  let categoryFilter = useSelector((state) => state.categoryFilter);
  let priceFilter = useSelector((state) => state.priceFilter);
  let ratingsFilter = useSelector((state) => state.ratingsFilter);
  let alphabeticalOrder = useSelector((state) => state.alphabeticalOrder);
  let products = [];

  if (searchName.length) {
    products = applyFilters(searchName, categoryFilter, priceFilter, ratingsFilter, alphabeticalOrder);
  }
  else {
    products = applyFilters(allProducts, categoryFilter, priceFilter, ratingsFilter, alphabeticalOrder);
  }

  let latestProducts = products.slice(-8);

  return (
    <div>
      <Filtros />
      <Carrusel />
      {/* <div class="flex  items-stretch  -mx-4"> */}
      <div className="grid grid-cols-1 m-16 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {latestProducts.map((e) => {
          return (
            // <Product key={e.id} image={e.images[0].url} name={e.name} price={e.price} />
            <Product key={e.id} image={e.images} name={e.name} price={e.price} />

          );
        })}

      </div>
      <Paginated />
     
    </div>

  );
}
