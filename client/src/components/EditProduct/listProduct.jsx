import { useDispatch, useSelector } from "react-redux";
import React, {useEffect} from "react";
import ProductoInd from "./productU";
import { filState} from "../../Redux/actions";
import Filter from "./filter";
import Search from "./searchEdit";






export default function List() {
    
    const dispatch = useDispatch();
    
    useEffect(() =>{
       
        dispatch(filState("all"))
        
    }, [dispatch]);

    var dataProductox = useSelector(state => state.filterState)
    const error = useSelector(state => state.error);
    
    return (
      <div >
            
            <div className="grid grid-cols-2 grid-flow-rows-dense">
                <Search/>
                <Filter/> 
            </div>
            
            <div class="grid grid-rows-1 gap-y-5 gap-x-4 sm:grid-rows-2 lg:grid-rows-3 xl:grid-rows-4 xl:gap-x-4 ">
                <div className="grid grid-cols-5 justify-items-center content-center ">
                    <div>  </div>
                    <div className="text-lg p-0 font-semibold text-violet-500">Nombre</div>
                    <div className="text-lg p-0 font-semibold text-violet-500">Precio</div>
                    <div className="text-lg p-0 font-semibold text-violet-500">Stock</div>
                    <div ></div>
                </div>
                {
                    error ?(<div ><span>Product not found</span></div>): dataProductox?.map(data => <ProductoInd key={data.id} data={data}/>) 
                }    
            </div>
      
      </div>
  
    );
}