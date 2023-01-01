import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import CartItem from "../components/Cart/CartItem";
import Swal from 'sweetalert2'
import { deleteCart } from "../Redux/actions";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { newTransaction, putProdut } from "../Redux/actions";
import { useAuth0 } from '@auth0/auth0-react';


export default function ShoppingCart() {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.carts)
    const history = useHistory()
    const [total, setTotal] = useState(0)
    const { user } = useAuth0();
    console.log("hola", user.email)


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
    function data (status){
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
            "userEmail": "prueba@gmail.com",
            price: total,
            itemsBought,
            status: status
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
        dispatch(deleteCart())
        successAlert()
    }

    function handleBuyNow(status) {
        data(status)
        dispatch(newTransaction(transaction))
        for (let a = 0; a < stockReload.length; a++){
            dispatch(putProdut(stockReload[a]))
        }
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
                            const name = details.payer.name.given_name;
                            handleBuyNow("Approved")
                            cleanCart()
                            successBuy(name)
                        }}
                        onCancel={async (data, actions) => {
                            failBuy()
                            handleBuyNow("Cancelled")
                        }}
                        />
                    </PayPalScriptProvider>
                    <div className="flex flex-col justify-center items-center">
                        {
                            items.length ?
                            <button className="w-8"  onClick={cleanCartAlert} ><img src="https://cdn-icons-png.flaticon.com/512/323/323711.png" alt={"delete"} /></button>
                            : <button className="w-8" disabled="true"><img src="https://cdn-icons-png.flaticon.com/512/323/323711.png" alt={"delete"} /></button>
                        }
                        {/* <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="button" >Buy now</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}



























// import { Fragment, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'

// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     id: 2,
//     name: 'Medium Stuff Satchel',
//     href: '#',
//     color: 'Blue',
//     price: '$32.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   // More products...
// ]

// export default function Example() {
//   const [open, setOpen] = useState(true)

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-in-out duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in-out duration-500"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
//                   <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                     <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
//                       <div className="flex items-start justify-between">
//                         <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
//                         <div className="ml-3 flex h-7 items-center">
//                           <button
//                             type="button"
//                             className="-m-2 p-2 text-gray-400 hover:text-gray-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             <span className="sr-only">Close panel</span>
//                             <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                           </button>
//                         </div>
//                       </div>

//                       <div className="mt-8">
//                         <div className="flow-root">
//                           <ul role="list" className="-my-6 divide-y divide-gray-200">
//                             {products.map((product) => (
//                               <li key={product.id} className="flex py-6">
//                                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                   <img
//                                     src={product.imageSrc}
//                                     alt={product.imageAlt}
//                                     className="h-full w-full object-cover object-center"
//                                   />
//                                 </div>

//                                 <div className="ml-4 flex flex-1 flex-col">
//                                   <div>
//                                     <div className="flex justify-between text-base font-medium text-gray-900">
//                                       <h3>
//                                         <a href={product.href}>{product.name}</a>
//                                       </h3>
//                                       <p className="ml-4">{product.price}</p>
//                                     </div>
//                                     <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                                   </div>
//                                   <div className="flex flex-1 items-end justify-between text-sm">
//                                     <p className="text-gray-500">Qty {product.quantity}</p>

//                                     <div className="flex">
//                                       <button
//                                         type="button"
//                                         className="font-medium text-indigo-600 hover:text-indigo-500"
//                                       >
//                                         Remove
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
//                       <div className="flex justify-between text-base font-medium text-gray-900">
//                         <p>Subtotal</p>
//                         <p>$262.00</p>
//                       </div>
//                       <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                       <div className="mt-6">
//                         <a
//                           href="#"
//                           className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                         >
//                           Checkout
//                         </a>
//                       </div>
//                       <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                         <p>
//                           or
//                           <button
//                             type="button"
//                             className="font-medium text-indigo-600 hover:text-indigo-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             Continue Shopping
//                             <span aria-hidden="true"> &rarr;</span>
//                           </button>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }
