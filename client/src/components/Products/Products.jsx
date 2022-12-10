import React from "react";
import Product from "../Cards/Card";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions";
import Paginated from "../Paginated/Paginated";

export default function Products(){
    let products = useSelector((state) => state.filteredProducts)
    let dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const indexLast = currentPage * productsPerPage;
    const indexFirst = indexLast - productsPerPage;
    const currentProducts = products.slice(indexFirst, indexLast);
    const maxPage = Math.ceil(products.length / productsPerPage)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        if(!products.length)dispatch(getAllProducts());
      }, []);

    return (
        <div>
            <div>
                {currentProducts.map(e => {
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
                <Paginated page={currentPage} setPage={paginado} maxPage={maxPage} />
            </div>
        </div>
    )
}