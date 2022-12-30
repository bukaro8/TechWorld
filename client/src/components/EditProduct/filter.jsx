import {React} from 'react';
import { useDispatch } from "react-redux";
import { filState, orderStock } from "../../Redux/actions";

export default function Filter (){

    const dispatch = useDispatch();
    
  
    function handlerFilterA(e){
     
      dispatch(filState(e))
         
    }
    function handlerOrderN(e){
      dispatch(orderStock(e))
    }
  
    return (
        <div>
        
          <select onChange= {(e) => {handlerFilterA(e.target.value)}} className='bg-gray-50 mt-2 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 '>
            <option value="all">Estado</option>
            <option value="true">activo</option>
            <option value="false">inactivo</option>
          </select>
          
          <select onChange={(e) => {handlerOrderN(e.target.value)}}className='bg-gray-50 mt-2 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 ' >
              <option value="all">Stock</option>
              <option value="des">🔺</option>
              <option value="asc">🔻</option>
          </select>
        </div>
    )
}