import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
//import Swal from 'sweetalert2'
import { increaseQuantity, decreaseQuantity, removeOneProduct } from "../../Redux/actions";

export default function CartItem({id, name, price, image, quantity, stock}) {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.carts)
    const cantidad = useSelector((state) => state.cartItems)
    const [cont, setCont] = useState(quantity)
    //const [priceUpdate, setPriceUpdate] = useState(price)
    
    

    const suma = () => {
        dispatch(increaseQuantity(payload))
        localStorage.setItem("cart", JSON.stringify(items))
        localStorage.setItem("items", JSON.stringify(cantidad))
        setCont(cont + 1)
    }

    const resta = () => {
        dispatch(decreaseQuantity(payload))
        localStorage.setItem("cart", JSON.stringify(items))
        localStorage.setItem("items", JSON.stringify(cantidad))
        setCont(cont - 1)
    }

    const remove = async() => {
        await dispatch(removeOneProduct(payload))
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

    /* const successAlert = () => {
        Swal.fire({
            title: 'Product removed!',
            confirmButtonText: "Ok",
            timer: 3000,
            icon: "success"
        });
    } */
    
    return (
    <div   className=" border shadow-md rounded mx-3 border-box flex flex-col  items-center w-48 px-2 pb-2 h-fit" >
        <div className="h-80" key={id}>
            <picture  className="w-4 m-1 ">
                    <img  className='w-full h-44' src={image} alt="Imagen" />
            </picture>
            <h3 className="text-center ">{name}</h3>
        </div>

        <div className="text-center" key={id}>
            <div className="">
                {
                cont > 1 ? <button className="activeMinus bg-transparent hover:border-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded" onClick={resta} > - </button>
                : <button className="bg-red-500 text-white font-bold py-1 px-2 rounded opacity-50 cursor-not-allowed" disabled="true" > - </button>
                }
                <h3>{cont}</h3>
                {
                cont < stock ? <button className="activePlus bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded" onClick={suma} > + </button>
                : <button className="deactivePlus bg-blue-500 text-white font-bold py-1 px-2 rounded opacity-50 cursor-not-allowed" disabled="true"> + </button>
                }
            </div>
        </div>

        <div className=""><h3>${cont * price}</h3></div>
        <button type="button"  className="bg-red-500 hover:bg-red-700 text-white  py-1 px-2 border border-red-700 rounded"  onClick={remove}>Remove</button>
    </div>
    )
}
