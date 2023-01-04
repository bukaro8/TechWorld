import React from "react";
import { addToCart, increaseQuantity, decreaseQuantity, removeOneProduct, deleteCart } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Rate } from 'antd';




export default function Product({ name, image, price, ratings, id, stock }) {
    const items = useSelector((state) => state.carts)
    const cantidad = useSelector((state) => state.cartItems)
    const dispatch = useDispatch()

    const handleOnClick = () => {
        dispatch(addToCart(payload))
        localStorage.setItem("cart", JSON.stringify(items))
        localStorage.setItem("items", JSON.stringify(cantidad))
    }

    const suma = () => {
        dispatch(increaseQuantity(payload))
        localStorage.setItem("cart", JSON.stringify(items))
        localStorage.setItem("items", JSON.stringify(cantidad))
    }

    const resta = () => {
        dispatch(decreaseQuantity(payload))
        localStorage.setItem("cart", JSON.stringify(items))
        localStorage.setItem("items", JSON.stringify(cantidad))
    }

    const remove = () => {
        dispatch(removeOneProduct(payload))
    }

    const cleanCart = () => {
        dispatch(deleteCart)
    }

    localStorage.setItem("cart", JSON.stringify(items))
    localStorage.setItem("items", JSON.stringify(cantidad))
    const payload = {
        name,
        image,
        price,
        id,
        stock
    }
    return (
        <div class="container mx-auto  ">
            <a key={id}>
                <div className='flex items-stretch -mx-4 h-full'>
                    <div className=" flex  flex-col m-8 w-72 max-w-sm bg-white rounded-lg shadow-md dark:bg-slate-300 dark:border-gray-700 hover:bg-blue-200 ">
                        <picture className="h-64  rounded flex items-center justify-center ">
                            <img className="p-8  rounded-t-lg m max-h-full "
                                src={image}
                                alt={image}
                            />

                        </picture>
                        <div class="rounded border-red-800 px-2">
                            <Link className="text-decoration-none text-white link" to={`/product/${id}`}>
                                <h5 class=" text-center text-lg  font-semibold tracking-tight text-gray-900 dark:text-white h-20">{name}</h5>
                            </Link>

                            <div class="flex items-center mt-2.5 mb-5">
                                <Rate disabled allowHalf defaultValue={ratings} />
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{ratings}</span>

                            </div>

                            <div class="flex items-center justify-between ">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOnClick}>Add to cart</button>
                            </div>
                            <Link to={`/product/${id}`}>
                                <button className="text-green-900 link text-xl title-font font-extralight mb-1">
                                    See more ...
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </a >
        </div>
    )
}
