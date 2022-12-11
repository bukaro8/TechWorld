/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Product from '../Cards/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';
import Paginated from '../Paginated/Paginated';

export default function Products() {
  let products = useSelector((state) => state.filteredProducts);
  let dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const indexLast = currentPage * productsPerPage;
    const indexFirst = indexLast - productsPerPage;
    const currentProducts = products.slice(indexFirst, indexLast);
    const maxPage = Math.ceil(products.length / productsPerPage)

<<<<<<< HEAD
  return (
    <div className="">
      <div className=''>
        {products.map((e) => {
          return (
            <Product
              key={e.id}
              image={e.images[0].url}
              name={e.name}
              price={e.price}
              ratings={e.ratings}
            />
          );
        })}
      </div>
    </div>
  );
=======
    useEffect(() => {
        if(!products.length)dispatch(getAllProducts());
      }, []);

    return (
        <div className="">
            <div className=''>
                {currentProducts.map((e) => {
                    return (
                        <Product
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
>>>>>>> 2a1b360b39fb9f9d78614cfead867b1e384f3075
}
