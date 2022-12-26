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
    <div className="" >
        <div className="" key={id}>
            <div className=""><img src={image} alt="Imagen" /></div>
            <div className=""><h3>{name}</h3></div>
        </div>

        <div className="" key={id}>
            <div className="">
                {
                cont > 1 ? <button className="activeMinus" onClick={resta} > - </button>
                : <button className="deactiveMinus" disabled="true" > - </button>
                }
                <h3>{cont}</h3>
                {
                cont < stock ? <button className="activePlus" onClick={suma} > + </button>
                : <button className="deactivePlus" disabled="true"> + </button>
                }
            </div>
        </div>

        <div className=""><h3>${cont * price}</h3></div>
        <button type="button"  className=""  onClick={remove}>Remove</button>
    </div>
    )
}
