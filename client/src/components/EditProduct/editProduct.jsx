import { useEffect, useState } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import {  useDispatch,useSelector } from "react-redux";
import { putProdut } from "../../Redux/actions";


export default function EditProduct() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector((state) => state.filterState);
    
    const productEdit = product.filter((e)=> e._id === id);
    console.log(product);
    
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    let [estado, setEstado] = useState('');

    useEffect(()=>{
        setPrice(productEdit[0].price);
        setStock(productEdit[0].stock);
        setEstado(productEdit[0].state);

    },[])
   
    
    function actProduct () {
        const edit = {
            _id: id,
            price: price,
            stock: stock,
            state: estado
        }
        dispatch(putProdut(edit)) 
        alert('Add sussenfull')
            history.push('/');
    }
     
    return (
        
       <div>
            <form
            className="md:w-1/2 m-auto py-6 px-6 sm:px-0"
            encType="multipart/form-data"
            >
                <Link to='/' class="bg-blue-700 m-2 rounded p-2 "
                >
                    <button>Return Home</button>
                </Link>
                <div className="mb-5">
                            
                    <label className="text-gray-700 font-bold text-xl">Nombre: </label>
                    <label
                        className=" w-full p-2 mt-2 placeholder-gray-400 rounded-md text-x2"
                        
                    >{productEdit[0].name}</label>
                    <label className="text-gray-700 font-bold text-2xl">precio</label>
                    <input
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md text-xl"
                        type="number"
                        value={price}
                        name="name"
                        onChange={(e) => {setPrice(e.target.value)}}
                    ></input>
                    <label className="text-gray-700 font-bold text-2xl">stock</label>
                    <input
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md text-xl"
                        type="number"
                        value={stock}
                        name="name"
                        onChange={(e) => {setStock(e.target.value)}}
                    ></input>
                    <label className="text-gray-700 font-bold text-2xl">Estado</label>
                    <span> {estado === false ? <span>Inactivo</span>
                    : <span>Activo</span>}</span>
                    
                     <select  onChange={(e) => {setEstado(e.target.value)}}>
                                    <option>seleccione un estado</option>
                                    <option value='true'>activo</option>
                                    <option value='false'>inactivo</option>
                                    
                                </select>
                    <button
                    className="bg-primary-color mt-10 w-full p-3 font-bold text-black rounded cursor-pointer hover:bg-sky-700 transition-colors"
                    type="submit"
                    onClick={actProduct}
                    >
                    Guardar Cambios
                    </button>
                </div>


            </form>
                
           
       </div>
        
    )
}