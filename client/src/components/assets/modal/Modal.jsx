import React from 'react';
import './modal.css';

const Modal = ({ children, isOpen, closeModal }) => {
	const handlerModalContainerClick = (e) => e.stopPropagation();

	return (
		<div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
			<div className='modal-container' onClick={handlerModalContainerClick}>
				<button className='modal-close' onClick={closeModal}>
					X
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
