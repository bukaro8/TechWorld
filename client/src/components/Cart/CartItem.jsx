import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import Swal from 'sweetalert2'
import {
	increaseQuantity,
	decreaseQuantity,
	removeOneProduct,
} from '../../Redux/actions';

export default function CartItem({ id, name, price, image, quantity, stock }) {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.carts);
	const cantidad = useSelector((state) => state.cartItems);
	const [cont, setCont] = useState(quantity);
	//const [priceUpdate, setPriceUpdate] = useState(price)

	const suma = () => {
		dispatch(increaseQuantity(payload));
		localStorage.setItem('cart', JSON.stringify(items));
		localStorage.setItem('items', JSON.stringify(cantidad));
		setCont(cont + 1);
	};

	const resta = () => {
		dispatch(decreaseQuantity(payload));
		localStorage.setItem('cart', JSON.stringify(items));
		localStorage.setItem('items', JSON.stringify(cantidad));
		setCont(cont - 1);
	};

	const remove = async () => {
		await dispatch(removeOneProduct(payload));
	};

	localStorage.setItem('cart', JSON.stringify(items));
	localStorage.setItem('items', JSON.stringify(cantidad));
	const payload = {
		name,
		image,
		price,
		id,
		stock,
	};

	/* const successAlert = () => {
        Swal.fire({
            title: 'Product removed!',
            confirmButtonText: "Ok",
            timer: 3000,
            icon: "success"
        });
    } */

	return (
		<div
			style={{ minWidth: '55vw' }}
			className=' border shadow-md rounded border-box flex my-1 py-1 justify-around items-center sm:flex-row flex-col '
		>
			<div className=' flex w-96 items-center h-44' key={id}>
				<picture className='  w-80  '>
					<img className='max-w-full max-h-44 ' src={image} alt='Imagen' />
				</picture>
				<h3 className='text-center '>{name}</h3>
			</div>

			<div className='' key={id}>
				<div className='flex w-24 items-center'>
					{cont > 1 ? (
						<button
							className=' font-semibold  py-1 px-2 font-medium text-indigo-600 hover:text-indigo-500 mr-2'
							onClick={resta}
						>
							-
						</button>
					) : (
						<button
							className=' font-bold py-1  px-2  opacity-50 cursor-not-allowed font-medium text-indigo-600 hover:text-indigo-500 mr-2'
							disabled='true'
						>
							-
						</button>
					)}
					<h3>{cont}</h3>
					{cont < stock ? (
						<button
							className='activePlus  font-bold py-1 px-2 font-medium text-indigo-600 hover:text-indigo-500 ml-2'
							onClick={suma}
						>
							+
						</button>
					) : (
						<button
							className='deactivePlus  font-bold  py-1 px-2  opacity-50 cursor-not-allowed ml-2 font-medium text-indigo-600 hover:text-indigo-500'
							disabled='true'
						>
							+
						</button>
					)}
				</div>
			</div>

			<div className=''>
				<h3>${(cont * price).toFixed(2)}</h3>
			</div>
			<button
				type='button'
				className=' font-medium text-indigo-600 hover:text-indigo-500'
				onClick={remove}
			>
				Remove
			</button>
		</div>
	);
}
