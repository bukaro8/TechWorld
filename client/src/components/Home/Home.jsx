/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Product from '../Cards/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, resetDetail } from '../../Redux/actions';
import gif from '../assets/imagenes/gif.png'
import Carrusel from '../assets/Carrusel/Carrusel';
import { Link } from "react-router-dom";

import Search from '../Search/Search';


export default function Home({ }) {


  let products = useSelector((state) => state.allProducts);


  let dispatch = useDispatch();
  useEffect(() => {
    if (!products.length) dispatch(getAllProducts());
    dispatch(resetDetail());
  }, [dispatch]);

  let latestProducts = products.slice(-8);
  return (
    <div>
       <nav className="bg-gray-50">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <Search />
                </div>
            </nav>

      <Carrusel />

      {/* <div class="flex  items-stretch  -mx-4"> */}
      <div className="grid grid-cols-1 m-16 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {latestProducts.map((e) => {
          return (
            // <Product key={e.id} image={e.images[0].url} name={e.name} price={e.price} />
            <Product key={e._id} image={e.images} name={e.name} price={e.price} id={e._id} stock={e.stock} ratings={e.ratings} />

          );
        })}

      </div>
      <footer class="p-4 mt-3 bg-white rounded-lg shadow md:flex md:items-center justify-center md:p-6 ">
        <span class="text-sm  text-center">© 2023 <a href="/team" class="hover:underline hover:text-red-600">TechWorld™</a>. All Rights Reserved.  
        </span>
      </footer>
    </div>

  );
}
