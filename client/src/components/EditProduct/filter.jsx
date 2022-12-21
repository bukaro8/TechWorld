
import { useDispatch } from "react-redux";
import { filState} from "../../Redux/actions";
export default function Filter (){

    const dispatch = useDispatch();
    
  
    function handlerFilterA(e){
     
        dispatch(filState(e))
         
       }
    return (
        <div>
          <label > filtro</label>
            <select onChange= {(e) => {handlerFilterA(e.target.value)}}>
              <option value="all">all</option>
              <option value="true">activo</option>
              <option value="false">inactivo</option>
            </select>
        </div>
    )
}