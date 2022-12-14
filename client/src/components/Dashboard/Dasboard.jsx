import React from 'react'
import FormAdmin from './FormAdmin'
import Formulario from '../Formulario/Create'
import { useModal } from '../assets/modal/useModal'
import Modal from '../assets/modal/Modal'


const Dasboard = ({ cerrarModal }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-full h-fit px-4 md:px-6 py-6 mt-2 bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600">
      <div class="links lg:block hidden w-1/6 md:w-4/6">
        <div class="menu flex items center justify-end gap-5 text-xl font-bold ">

          <button className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={openModal}>Create User</button>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <FormAdmin closeModal={closeModal} cerrarModal={cerrarModal} />
          </Modal>
 

          <button className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={openModal2}>Create Product</button>
          <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <Formulario closeModal={closeModal} cerrarModal={cerrarModal} />
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Dasboard