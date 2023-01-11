import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../../../Redux/actions';
import { useHistory } from 'react-router-dom';

// Data
import data from './data.json';

const Carousel = () => {
	const maxScrollWidth = useRef(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const carousel = useRef(null);
	let dispatch = useDispatch();
	const history = useHistory();

	const handleCarruselCategoryFilter = (e) => {
		e.preventDefault();
		// console.log('esto es e.target.id en Carrusel: ' + e.target.id);
		if (e.target.id) {
			dispatch(filterByCategory(e.target.id));
			history.push('/products');
		}
	};

	const movePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	const moveNext = () => {
		if (
			carousel.current !== null &&
			carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
		) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const isDisabled = (direction) => {
		if (direction === 'prev') {
			return currentIndex <= 0;
		}

		if (direction === 'next' && carousel.current !== null) {
			return (
				carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
			);
		}

		return false;
	};

	useEffect(() => {
		if (carousel !== null && carousel.current !== null) {
			carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
		}
	}, [currentIndex]);

	useEffect(() => {
		maxScrollWidth.current = carousel.current
			? carousel.current.scrollWidth - carousel.current.offsetWidth
			: 0;
	}, []);

	return (
		<div className='carousel  mx-auto'>
			<div className='relative overflow-hidden'>
				<div
					ref={carousel}
					className=' flex gap-1  scroll-smooth snap-x snap-mandatory touch-pan-x z-0 border-b-4 pb-3 my-3'
				>
					{data.resources.map((resource, index) => {
						return (
							<div
								key={index}
								className='text-center relative w-1/6 p-1 cursor-pointer border-b-4 border-transparent  hover:border-blue-500'
							>
								<span
									className=''
									id={resource.title}
									onClick={(e) => {
										handleCarruselCategoryFilter(e);
									}}
								>
									{resource.title}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
// https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
