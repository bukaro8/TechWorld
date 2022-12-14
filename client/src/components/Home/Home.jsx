/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Product from '../Cards/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';
import gif from '../assets/imagenes/gif.png'
import Carrusel from '../assets/Carrusel/Carrusel';

// import Formulario from '../Formulario/Create';
// modal
// import {useModal}from '../assets/modal/useModal'
// import Modal from '../assets/modal/Modal'

export default function Home({ }) {


  // const [isOpenModal, openModal, closeModal] = useModal(false);
  let products = useSelector((state) => state.allProducts);


  let dispatch = useDispatch();
  useEffect(() => {
    if (!products.length) dispatch(getAllProducts());
  }, [dispatch]);





  let latestProducts = products.slice(-8);
  return (
    <div>
      <Carrusel />
      {/* <img src={gif} className="flex flex-wrap mx-auto w-11/12 m-8 " /> */}

      <div>
        <img src={gif} className="flex flex-wrap mx-auto w-11/12 m-8 " />
      </div>

      {/* <div class="flex  items-stretch  -mx-4"> */}
      <div className="grid grid-cols-1 m-16 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {latestProducts.map((e) => {
          return (
            // <Product key={e.id} image={e.images[0].url} name={e.name} price={e.price} />
            <Product key={e._id} image={e.images} name={e.name} price={e.price} id={e._id}/>

          );
        })}

      </div>
      {/* <Formulario/> */}

      {/* ****************************************************************************************** */}
      {/* Modal */}
=======
     {/* ****************************************************************************************** */}
                                               {/* Modal */}

      {/* <div>
        <button className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={openModal}>HACER MODAL</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <Product closeModal={closeModal} cerrarModal={cerrarModal} />
        </Modal>
      </div> */}
      {/* ****************************************************************************************** */}
    </div>

  );
}
