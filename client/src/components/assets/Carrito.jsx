import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, removeOneProduct, decreaseQuantity } from "../../Redux/actions";
import Swal from "sweetalert2"

const Carrito = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.carts)
    const cantidad = useSelector((state) => state.cartItems)
    const [total, setTotal] = useState(0)
    const [show, setShow] = useState(true)

    const removeAlert = () => {
        Swal.fire({
            title: 'Product Removed!',
            confirmButtonText: "Ok",
            timer: 3000,
            icon: "success"
        });
    }


    const suma = (payload) => {
        dispatch(increaseQuantity(payload))
        localStorage.setItem("cart", JSON.stringify(items))
        localStorage.setItem("items", JSON.stringify(cantidad))
    }

    const resta = (payload) => {
        dispatch(decreaseQuantity(payload))
        localStorage.setItem("cart", JSON.stringify(items))
        localStorage.setItem("items", JSON.stringify(cantidad))
    }

    const remove = (payload) => {
        dispatch(removeOneProduct(payload))
        removeAlert()
    }

    const amount = (price, quantity) => {
        var amountPerProduct = price * quantity
        return amountPerProduct.toFixed(2)
    }

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
        return total.toFixed(2)
    }

    const handleMouseMove = () =>{
        setTotal(setTotalPrice())
    }

    const handleOnClick = () => {
        if (show) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    return (
        <div onMouseMove={handleMouseMove} onClick={handleMouseMove}>
            <button onClick={handleOnClick}>
                <svg className={ 'hover:text-red-600'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.40002 1.99268C1.84774 1.99268 1.40002 2.44039 1.40002 2.99268C1.40002 3.54496 1.84774 3.99268 2.40002 3.99268V1.99268ZM4.69256 2.99268L5.65779 2.73126C5.53973 2.29536 5.14417 1.99268 4.69256 1.99268V2.99268ZM8.41793 16.7479L7.45271 17.0093C7.58298 17.4903 8.0475 17.802 8.54197 17.7402L8.41793 16.7479ZM19.8806 15.3151L20.0047 16.3073C20.4293 16.2543 20.7732 15.9368 20.8599 15.5177L19.8806 15.3151ZM21.6 7.00462L22.5793 7.20722C22.6402 6.91271 22.5654 6.60641 22.3755 6.37319C22.1856 6.13998 21.9008 6.00462 21.6 6.00462V7.00462ZM5.77913 7.00462L4.8139 7.26603L5.77913 7.00462ZM2.40002 3.99268H4.69256V1.99268H2.40002V3.99268ZM8.54197 17.7402L20.0047 16.3073L19.7566 14.3228L8.2939 15.7556L8.54197 17.7402ZM20.8599 15.5177L22.5793 7.20722L20.6208 6.80201L18.9014 15.1125L20.8599 15.5177ZM3.72733 3.25409L4.8139 7.26603L6.74435 6.7432L5.65779 2.73126L3.72733 3.25409ZM4.8139 7.26603L7.45271 17.0093L9.38316 16.4865L6.74435 6.7432L4.8139 7.26603ZM21.6 6.00462H5.77913V8.00462H21.6V6.00462ZM11 20.4999C11 20.7761 10.7762 20.9999 10.5 20.9999V22.9999C11.8807 22.9999 13 21.8807 13 20.4999H11ZM10.5 20.9999C10.2239 20.9999 10 20.7761 10 20.4999H8.00002C8.00002 21.8807 9.11931 22.9999 10.5 22.9999V20.9999ZM10 20.4999C10 20.2238 10.2239 19.9999 10.5 19.9999V17.9999C9.11931 17.9999 8.00002 19.1192 8.00002 20.4999H10ZM10.5 19.9999C10.7762 19.9999 11 20.2238 11 20.4999H13C13 19.1192 11.8807 17.9999 10.5 17.9999V19.9999ZM19 20.4999C19 20.7761 18.7762 20.9999 18.5 20.9999V22.9999C19.8807 22.9999 21 21.8807 21 20.4999H19ZM18.5 20.9999C18.2239 20.9999 18 20.7761 18 20.4999H16C16 21.8807 17.1193 22.9999 18.5 22.9999V20.9999ZM18 20.4999C18 20.2238 18.2239 19.9999 18.5 19.9999V17.9999C17.1193 17.9999 16 19.1192 16 20.4999H18ZM18.5 19.9999C18.7762 19.9999 19 20.2238 19 20.4999H21C21 19.1192 19.8807 17.9999 18.5 17.9999V19.9999Z" fill="currentcolor"/>
                </svg>
            </button>
            <div hidden={show}>
                <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <div class="flex items-start justify-between">
                                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                <div class="ml-3 flex h-7 items-center">
                                <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={handleOnClick}>
                                    <span class="sr-only">Close panel</span>
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                </div>
                            </div>
                            {
                                !items.length ? 
                                <div class="text-lg font-medium text-gray-900">There are no products in the Cart yet!</div> :
                                items.map(e => {
                                    return (
                                        <div class="mt-8">
                                        <div class="flow-root">
                                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                                            <li class="flex py-6">
                                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img className="max-w-full" src={e.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center"/>
                                            </div>
                                            <div class="ml-4 flex flex-1 flex-col">
                                                <div>
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                    <a href="#">{e.name}</a>
                                                    </h3>
                                                    <p class="ml-4">${amount(e.price, e.quantity)}</p>
                                                </div>
                                                </div>
                                                <div class="flex flex-1 items-end justify-between text-sm">
                                                {
                                                    e.quantity > 1 ? 
                                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={a => resta(e)}>-</button> :
                                                    <button disabled={true} type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={a => resta(e)}>-</button>
                                                }
                                                <p class="text-gray-500">{e.quantity}</p>
                                                {
                                                    e.quantity < e.stock ?
                                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={a => suma(e)}>+</button> :
                                                    <button disabled={true} type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={a => suma(e)}>+</button>
                                                }
                                                
                                                <div class="flex">
                                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={a => remove(e)}>Remove</button>
                                                </div>
                                                </div>
                                            </div>
                                            </li>
                                            <li class="flex py-6">
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                )})
                            } 
                            </div>
                            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div class="flex justify-between text-base font-medium text-gray-900">
                                <p>Total</p>
                                {
                                    items.length ? 
                                    <p>${total}</p> :
                                    <p>$0</p>
                                }
                            </div>
                            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleOnClick}>
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito