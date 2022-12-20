import { useDispatch, useSelector } from "react-redux";
import React, {useEffect} from "react";
import ProductoInd from "./productU";
import { filState} from "../../Redux/actions";
import Filter from "./filter";




export default function List() {
    
    const dispatch = useDispatch();
    
    useEffect(() =>{
       
        dispatch(filState("all"))
        
    }, [dispatch]);

    var dataProductox = useSelector(state => state.filterState)
    
    
    
    return (
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <Filter/>
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {
                dataProductox?.map(data => <ProductoInd key={data.id} data={data}/>)
            }  
        </div>
      </div>
  
    );
}