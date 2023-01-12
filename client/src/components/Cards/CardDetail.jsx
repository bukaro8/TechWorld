import React, { useEffect, useState } from 'react';
import { getDetail, addToCart } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';import { Reviews } from '../Reviews/reviews';



import { Rate } from 'antd';


const CardDetail = () => {
	const items = useSelector((state) => state.detail);
	const cart = useSelector((state) => state.carts);
	const cantidad = useSelector((state) => state.cartItems);
	const dispatch = useDispatch();
	const { id } = useParams();

	
	
	useEffect(() => {
		dispatch(getDetail(id));
	}, [dispatch]);
 
	
	
	const payload = {
		id: items._id,
		name: items.name,
		stock: items.stock,
		quantity: items.quantity,
		price: items.price,
		image: items.images,
	};

	const successAlert = () => {
		Swal.fire({
			title: 'Product added to cart!',
			confirmButtonText: 'Ok',
			timer: 3000,
			icon: 'success',
		});
	};

	const addCart = () => {
		dispatch(addToCart(payload));
		localStorage.setItem('cart', JSON.stringify(cart));
		localStorage.setItem('items', JSON.stringify(cantidad));
		successAlert();
	};


	return (
		<div>
			<section class='text-gray-700 body-font overflow-hidden bg-white'>
				<div class='container px-5  mx-auto'>
					<div class='lg:w-4/5 mx-auto flex flex-wrap'>
						<picture className='lg:w-96 w-screen lg:m-auto'>
							<img
								alt='ecommerce'
								class=' max-w-9/12  rounded border border-gray-200'
								src={items.images}
							></img>
						</picture>
						<div class='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
							<h2 class='text-sm title-font text-gray-500 tracking-widest'>
								Tech World
							</h2>
							<h1 class='text-gray-900 text-3xl title-font font-medium mb-1'>

								{items.name}
							</h1>

							<div class='flex mb-4'>
								<span class='flex items-center'>
									<div class="flex items-center mt-2.5 mb-5">
										{items.ratings ?
											<Rate disabled allowHalf defaultValue={items.ratings} />
											: null
										}

										<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{items.ratings}</span>
									</div>
								</span>

							</div>
							<p class='leading-relaxed'>{items.description}</p>
							<div class='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'></div>
							<div class='flex'>
								<span class='title-font font-medium text-2xl text-gray-900'>
									$ {items.price}
								</span>
								<button
									class='flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded'
									onClick={addCart}
								>
									Add Cart
								</button>
								{/* <button class='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
									<svg
										fill='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										class='w-5 h-5'
										viewBox='0 0 24 24'
									>
										<path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
									</svg>
								</button> */}
							</div>
						</div>
					</div>
				</div>
			</section>
            <div>
                <Reviews/>
            </div>
            
		</div>
	);
};

export default CardDetail;
