/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Product from '../Cards/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, resetDetail, setCurrentPage } from '../../Redux/actions';
import Paginated from '../Paginated/Paginated';
import Search from '../Search/Search';
import { Filtros, applyFilters } from '../Filtros/Filtros';

export default function Products() {
  let dispatch = useDispatch();
  let products = [];

  useEffect(() => {
    if (!products.length) dispatch(getAllProducts());
    dispatch(resetDetail());
  }, [dispatch]);
  let allProducts = useSelector((state) => state.allProducts);
  let searchName = useSelector((state) => state.searchName);
  let categoryFilter = useSelector((state) => state.categoryFilter);
  let priceFilter = useSelector((state) => state.priceFilter);
  let ratingsFilter = useSelector((state) => state.ratingsFilter);
  let alphabeticalOrder = useSelector((state) => state.alphabeticalOrder);

  if(searchName.length){
    products = applyFilters(searchName, categoryFilter, priceFilter, ratingsFilter, alphabeticalOrder);
  }
  else{
    products = applyFilters(allProducts, categoryFilter, priceFilter, ratingsFilter, alphabeticalOrder);
  }
  let currentPage = useSelector((state)=> state.currentPage);
  const productsPerPage = 8;
  const indexLast = currentPage * productsPerPage;
  const indexFirst = indexLast - productsPerPage;
  const maxPage = Math.ceil(products.length / productsPerPage)

  const currentProducts = products.slice(indexFirst, indexLast);

    return (
        <div className="">
             <nav className="bg-gray-50">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <Search />
                </div>
            </nav>
            
            <Filtros />
            <div className="grid grid-cols-1 m-16 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {currentProducts.map((e) => {
                    return (
                        <Product key={e.id} image={e.images} name={e.name} price={e.price} id={e._id} stock={e.stock} ratings={e.ratings}/>
                    )
                })}
            </div>
            <div>
                <Paginated maxPage={maxPage} />
            </div>
        </div>
    )

}
