import {Link} from 'react-router-dom';
import React from 'react';

export default function ProductoInd({data}){
    return(
       
        <div className='shadow-2xl'> 
            <div >
                <div class="h-6. w-20 object-cover object-center group-hover:opacity-75">
                    <img src={data.images} alt="" />
                </div>
                <ul>
                    <li>Id: {data._id}</li>
                    <li>Nombre: {data.name}</li>
                    <li>Precio: {data.price} </li>
                    <li>Stock: {data.stock}</li>
                    <li>Estado: {data.state === false ? <span>Inactivo</span>
                    : <span>Activo</span>}

                    </li>
                </ul>
                <Link to={`/edit/${data._id}`}><button class="bg-blue-500 hover:bg-blue-700 text-white object-center font-bold py-2 px-4 rounded-full">
                    Editar🖋️
                </button></Link>
            </div> 
        </div>
        
    )

}