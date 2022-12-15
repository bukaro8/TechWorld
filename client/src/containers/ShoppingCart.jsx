import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import CartItem from "../components/Cart/CartItem";
//import Swal from 'sweetalert2'
import { deleteCart } from "../Redux/actions";

export default function ShoppingCart() {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.carts)
    const history = useHistory()
    const [total, setTotal] = useState(0)
    // const user = useSelector((state) => state.userOne); //esta viendo el usuario del que compra

   /*  const successAlert = () => {
        Swal.fire({
            title: 'All Products Removed!',
            confirmButtonText: "Ok",
            timer: 3000,
            icon: "success"
        });
    } */
    var totalPrice

    function setIndividualPrice(){
        totalPrice = items.map(e => {
        return e.quantity * e.price
        })
        return totalPrice
    }

    function setTotalPrice(){
        setIndividualPrice()
        var total = totalPrice.reduce((a, b) => {return a + b})
        return total
    }
    
    const handleOnClick = () =>{
        setTotal(setTotalPrice())
    }

    const cleanCart = () => {
        dispatch(deleteCart())
    }
    

    /* const handleBuyNow = () => {
        if( totalCart.length > 0 ){ //que usar en vez de .length?
            setTimeout(() => {
                if(user){
                    <div>ENVIAR LA INFO COMO LO INDIQUE MERCADO PAGO</div>
                /*const objCart = {
                userId: user.id,
                description: cartDetail.length && cartDetail.map((e) =>  `producto: ${e.name} cantidad: ${totalCart[e.id][1]} total: AR$ ${totalCart[e.id][0] * totalCart[e.id][1]}`  ).join(' | '),
                productsId: cartDetail.map((e)=> e.id).join(','), 
                price: totalPrice.toString(),
                totalCart: localStorage.getItem('totalCart'),
                }
                axios.post(`${process.env.REACT_APP_SERVER_BACK}/checkout/checkout-order`, objCart) //que está pasando aca??
                .then(response =>  window.location.href = response.data.links[1].href )
                .then(()=> clearCartWithOutAlert())  */
      /*       }else{
                userRegister()
            }},200)
        } else{
            emptyCart()
        } */
    /*} */

    /* if (cart.length) { return <Loading /> } */

    return (
        <div className="" onClick={handleOnClick}>
            <NavBar/>
            <div id=""><h2 >Shopping Cart</h2></div>
            <div className="">
                {
                    !items.length ? 
                    <div>There are no products in the Cart yet!</div> :
                    items.map(e => {
                        return (
                        <CartItem key={e.id} id={e.id} name={e.name} price={e.price} image={e.images} quantity={e.quantity} />
                    )})
                }
            </div>
            <div className="">
                <div className="">
                    <p>Order Summary</p>
                    <div className="">
                        <span>Total: </span>
                        {
                            !items.length ? 
                            <span>$ 0</span> :
                            <span className=""> $ {total}</span>
                        }
                    </div>
                </div>
                <div className="">
                    <button className=""  onClick={cleanCart} ><img src="https://cdn-icons-png.flaticon.com/512/323/323711.png" alt={"delete"} /></button>
                    <button className="" type="button" /* onClick={handleBuyNow()} */ >Buy now</button>
                </div>
            </div>
        </div>
    )
}
