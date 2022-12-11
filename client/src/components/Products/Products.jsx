/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Product from '../Cards/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';
import Paginated from '../Paginated/Paginated';
import NavBar from '../NavBar/NavBar'

export default function Products() {
  let products = useSelector((state) => state.filteredProducts);
  let dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const indexLast = currentPage * productsPerPage;
    const indexFirst = indexLast - productsPerPage;
    const currentProducts = products.slice(indexFirst, indexLast);
    const maxPage = Math.ceil(products.length / productsPerPage)


    useEffect(() => {
        if(!products.length)dispatch(getAllProducts());
      }, []);

    return (
        <div className="">
            <NavBar/>
            <div className="grid grid-cols-1 m-16 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {currentProducts.map((e) => {
                    return (
                        <Product
                            key={e.id}
                            image={e.images[0].url}
                            name={e.name}
                            price={e.price}
                            ratings={e.ratings}
                        />
                    )
                })}
            </div>
            <div>
                <Paginated page={currentPage} setPage={setCurrentPage} maxPage={maxPage} />
            </div>
        </div>
    // </div>
    )

}
