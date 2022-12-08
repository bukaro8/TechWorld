import React from "react";
import Product from "../Cards/Card";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllProducts } from "../../Redux/actions";

export default function Home(){
    let products = useSelector((state) => state.filteredProducts)
    let dispatch = useDispatch()

    useEffect(() => {
        if(!products.length)dispatch(getAllProducts());
      }, []);

    return (
        <div>
            <div>
                {products.map(e => {
                    return (
                        <Product
                            image={e.images[0].url}
                            name={e.name}
                            price={e.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}