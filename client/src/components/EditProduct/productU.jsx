import React from 'react';
import {Link} from 'react-router-dom';


export default function ProductoInd({data}){
    return(
       
        <div > 
            <div className="grid grid-cols-5 divide-y  divide-dashed divide-violet-400   ">
                <div className="grid justify-items-center content-center">
                    <img src={data.images} alt={data.name}  className=' h-20 w-25 '/>
                </div>
            
                <div className='grid justify-items-center content-center'>{data.name}</div>
                <div className='grid justify-items-center content-center'>{data.price} </div>
               {
                data.stock <= 5 ? <div className='grid justify-items-center content-center text-red-500'>{data.stock}</div>
                : <div className='grid justify-items-center content-center text-lime-500'>{data.stock}</div>
               } 
                
                {/* <div>Estado: {data.state === false ? <span>Inactivo</span>
                : <span>Activo</span>}
                </div> */}
        
                <div className='grid justify-items-center content-center'>
                    <Link to={`/edit/${data._id}`}>
                        <button >
                            🖋️
                        </button>
                    </Link>
                </div>
            </div> 
        </div>
        
    )

}