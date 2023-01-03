import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import Swal from 'sweetalert2'
import { deleteCart } from "../Redux/actions";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { newTransaction, putProdut } from "../Redux/actions";
import { useAuth0 } from '@auth0/auth0-react';
import emailjs from "@emailjs/browser"


export default function ShoppingCart() {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.carts)
    const history = useHistory()
    const [total, setTotal] = useState(0)
    const { user, loginWithRedirect } = useAuth0();


    const register = () => {
        Swal.fire({
            title: "Login to buy items",
            confirmButtonText: "Ok",
            icon: "warning"
        }).then((result) => {
            loginWithRedirect()
        })
    }

    const emptyCart = () => {
        Swal.fire({
            title: "Cart is empty",
            showCancelButton: true,
            confirmButtonText: "Search products",
            cancelButtonText: "Go home",
            icon: "warning"
        }).then((result) => {
            if (result.isConfirmed) {
                history.push("/products")
            }
            else {
                history.push("/")
            }
        })
    }

    const successAlert = () => {
        Swal.fire({
            title: 'All Products Removed!',
            confirmButtonText: "Ok",
            timer: 3000,
            icon: "success"
        });
    }

    const successBuy = (name) => {
        Swal.fire({
            title: `Transaction completed by ${name}` ,
            html: "You will be redirected in 5 seconds",
            icon: "success",
            timer: 5000,
            timerProgressBar: true
        }).then((result) => {
            history.push("/")
            window.location.reload()
        })
    }

    const failBuy = () => {
        Swal.fire({
            title: 'Transaction cancelled',
            showCancelButton: true,
            confirmButtonText: "Search more products",
            cancelButtonText: "Stay in cart",
            icon: "warning"
        }).then((result) => {
            if (result.isConfirmed) {
                history.push("/products")
            }
            else {
                window.location.reload()
            }
        })
    }

    var totalPrice
    var transaction
    var stockReload
    function data (status, shipping){
        if (status == "Approved"){
            stockReload = items.map(e => {
                return {
                    _id: e.id,
                    stock: e.stock - e.quantity
                }
            })
        }
        if (status == "Cancelled"){
            stockReload = items.map(e => {
                return {
                    _id: e.id,
                    stock: e.stock
                }
            })
        }
        var itemsBought = items.map(e => {
           return {
                product: e.name,
                quantity: e.quantity
            }
        })
        transaction = {
            userEmail: user.email,
            price: total,
            itemsBought,
            status: status,
            shipping: shipping
        }
    }

    function setIndividualPrice(){
        totalPrice = items.map(e => {
        return e.quantity * e.price
        })
        return totalPrice
    }

    function setTotalPrice(){
        setIndividualPrice()
        var total = totalPrice.reduce((a, b) => {return a + b})
        return total.toFixed(2)
    }
    
    const handleOnClick = () =>{
        setTotal(setTotalPrice())
    }

    const cleanCart = () => {
        dispatch(deleteCart())
    }

    const cleanCartAlert = () => {
        if (items.length) {
            dispatch(deleteCart())
            successAlert()
        }
        else {
            emptyCart()
        }
    }

    function handleBuyNow(status, shipping) {
        data(status, shipping)
        dispatch(newTransaction(transaction))
        for (let a = 0; a < stockReload.length; a++){
            dispatch(putProdut(stockReload[a]))
        }
    }

   

    const emailTransaction = () => {
        var orderSummary = []
        for (let i = 0; i < items.length; i++){
            orderSummary.push(items[i].name)
            orderSummary.push(items[i].quantity)
        }
        var params = {
            name: user.given_name,
            message: orderSummary,
            totals: total,
            mail: user.email
        }
        emailjs.send("service_a3dbnfc","template_ffo4l4o", params, "Vvb2IwNd3JccV-1cY")
    }
    

    return (
        <div  className="flex flex-col justify-center items-center " onPointerMove={handleOnClick}>    
            <h2 className="text-2xl" >Shopping Cart</h2>
            <div  className=" flex flex-wrap justify-around" >
                {
                    !items.length ? 
                    <div >There are no products in the Cart yet!</div> :
                    items.map(e => {
                        return (
                        <CartItem key={e.id} id={e.id} name={e.name} price={e.price} image={e.image} quantity={e.quantity} stock={e.stock}/>
                    )})
                }
            </div>
            <div className="text-center w-1/4">
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
                    {
                        !user ? 
                            <div>
                                {register()}
                                <PayPalScriptProvider options={{"client-id": "AQB3R_3UZ3vTt2ldgt4HbNje7Ms7fDH5MP9tbok-zjN6DeuRGw5Z2ommnuZ-ERXDlWT3Ucv9ozPMnfrl"}}>
                                <PayPalButtons
                                disabled={true}
                                />
                                </PayPalScriptProvider>
                            </div> : 
                        !items.length ? 
                            <PayPalScriptProvider options={{"client-id": "AQB3R_3UZ3vTt2ldgt4HbNje7Ms7fDH5MP9tbok-zjN6DeuRGw5Z2ommnuZ-ERXDlWT3Ucv9ozPMnfrl"}}>
                                <PayPalButtons
                                disabled={true}
                                />
                            </PayPalScriptProvider> :
                            <PayPalScriptProvider options={{"client-id": "AQB3R_3UZ3vTt2ldgt4HbNje7Ms7fDH5MP9tbok-zjN6DeuRGw5Z2ommnuZ-ERXDlWT3Ucv9ozPMnfrl"}}>
                                <PayPalButtons
                                forceReRender={[total]}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: total,
                                                        currency_code: "USD"
                                                    },
                                                },
                                            ],
                                        })}}
                                onApprove={async (data, actions) => {
                                    const details = await actions.order.capture();
                                    var shipping = "" + details.purchase_units[0].shipping.address.address_line_1 + ", " + details.purchase_units[0].shipping.address.admin_area_1 + ", " + details.purchase_units[0].shipping.address.country_code + ". Postal code:" + details.purchase_units[0].shipping.address.postal_code
                                    const name = details.payer.name.given_name;
                                    handleBuyNow("Approved", shipping)
                                    cleanCart()
                                    emailTransaction()
                                    successBuy(name)
                                }}
                                onCancel={async (data, actions) => {
                                    failBuy()
                                    handleBuyNow("Cancelled")
                                }}
                                />
                            </PayPalScriptProvider>  
                    }
                    <div className="flex flex-col justify-center items-center">
                        <button className="w-8"  onClick={cleanCartAlert} ><img src="https://cdn-icons-png.flaticon.com/512/323/323711.png" alt={"delete"} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
