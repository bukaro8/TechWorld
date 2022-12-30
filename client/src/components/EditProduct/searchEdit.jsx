import {React} from 'react';
import {useDispatch} from 'react-redux';
import { getProduName } from '../../Redux/actions';


export default function Search(){
    const dispatch = useDispatch();

    function handlerInput(e){
        
        dispatch(getProduName(e.target.value))
    }

    return(
        <div>
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6 ">
          <div>
            <input
              onChange={handlerInput}
              type="text"
              placeholder="Search Product"
              className='block p-4 pl-5 w-50 text-sm text-gray-900  rounded-full border bg-slate-300'
            />
          </div>
        </div>
      </div>
    )
}