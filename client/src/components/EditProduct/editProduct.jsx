import React,{ useEffect, useState, useCallback} from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import {  useDispatch,useSelector } from "react-redux";
import { putProdut } from "../../Redux/actions";
import Swal from "sweetalert"
import { useDropzone } from 'react-dropzone';

export default function EditProduct() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector((state) => state.filterState);
    
    const productEdit = product.filter((e)=> e._id === id);
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    let [estado, setEstado] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImage] = useState('');

    useEffect(()=>{
        setPrice(productEdit[0].price);
        setStock(productEdit[0].stock);
        setEstado(productEdit[0].state);
        setName(productEdit[0].name);
        setDescription(productEdit[0].description);
        setImage(productEdit[0].image);
    },[])

    const [loading, setLoading] = useState(false);

	const onDrop = useCallback(async (acceptedFile) => {
		const files = acceptedFile;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'images');
		setLoading(true);
		const res = await fetch(
			'https://api.cloudinary.com/v1_1/dou4gboud/upload',
			{
				method: 'POST',
				body: data,
			}
		);
		const file = await res.json();

		setImage(file.secure_url );
		
		setLoading(false);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accepts: 'images/*',
		multiple: false,
	});
    
    function actProduct () {
        const edit = {
            _id: id,
            name: name,
            price: price,
            stock: stock,
            state: estado,
            description: description,
            image: images
        }
        
        dispatch(putProdut(edit)) 
        
        Swal(
            ' sussenfull',
            'the product was edited',
            'success'
        )
        setTimeout(() => {
            history.push('/list');
          }, "1500") 
    }
     
    return (
        
       <div>
            <Link to='/list' class=" m-2 rounded p-2 ">
                <button>❌</button>
            </Link>
            <form
            className="md:w-1/2 m-auto  grid gap-x-0 gap-y-2 grid-cols-2 "
            encType="multipart/form-data"
            >
                <div className="md:w-auto m-auto grid justify-items-center content-center">
                    <img 
                        src={productEdit[0].images} 
                        alt={productEdit[0].name} 
                        className=' h-48 w-50 ' 
                    />
                     <label className="text-gray-700 font-bold text-2xl">Imagen: </label>
                        {/* <input
                            className="border w-80 p-2 mt-2  rounded-md text-1xl"
                            type="text"
                            name="image"
                            onChange={(e) => {setImage(e.target.value)}}
                            
                        ></input> */}
                        <div
								{...getRootProps()}
								className={`m-1 p-1 border border-dashed border-red-500 flex justify-center h-16 items-center rounded {${
									isDragActive ? 'border-solid border-green-800' : null
								}}`}
							>
								<input
									name='images'
									// value={input.images}
									// onChange={(e) => handleChange(e)}
									{...getInputProps()}
								/>
								Drop Image
							</div>
							{loading ? (
								<h2>loading images</h2>
							) : (
								<img src={images} alt={images} style={{ width: '300px' }} />
							)}
                </div>
                
                <div className="md:w-auto m-auto  grid justify-items-center">
                    
                    <label className="text-gray-700 font-bold text-xl">Nombre: </label>
                    <input
                        className="border w-80 p-2 mt-1 rounded-md text-1xl"
                        type="text"
                        value={name}
                        name="name"
                        onChange={(e) => {setName(e.target.value)}}
                          
                    ></input>
                {/* </div>
                <div className="mb-5 grid justify-items-end"> */}
                    <label className="text-gray-700 font-bold text-2xl">Precio: </label>
                    <input
                        className="border w-80 p-2 mt-1 rounded-md text-1xl"
                        type="number"
                        value={price}
                        name="name"
                        onChange={(e) => {setPrice(e.target.value)}}
                    ></input>
                {/* </div>
                <div className="mb-5 grid justify-items-end"> */}
                    <label className="text-gray-700 font-bold text-2xl">Stock: </label>
                    <input
                        className="border w-80 p-2 mt-2  rounded-md text-1xl"
                        type="number"
                        value={stock}
                        name="name"
                        onChange={(e) => {setStock(e.target.value)}}
                    ></input>
                {/* </div>
                
                <div className="mb-5 grid justify-items-end"> */}
                 <label className="text-gray-700 font-bold text-2xl">Descripción: </label>
                    <textarea
                        className="border w-80 p-2 mt-2  rounded-md text-1xl"
                        type="number"
                        value={description}
                        name="name"
                        onChange={(e) => {setDescription (e.target.value)}}
                    ></textarea>
                    <label className="text-gray-700 font-bold text-2xl">Estado: </label>
                    <span> {estado === false ? <span className='text-red-500 font-bold text-4xl  '>Inactivo</span>
                    : <span className='text-lime-500 font-bold text-4xl  '>Activo</span>}</span>
                {/* </div>
                <div className="mb-5 grid justify-items-end"> */}
                <select  onChange={(e) => {setEstado(e.target.value)}} className="border w-80 p-2 mt-2 placeholder-gray-400 rounded-md text-xl ">
                                <option>seleccione un estado</option>
                                <option value='true' className='text-lime-500 font-bold text-2xl'>activo</option>
                                <option value='false' className='text-red-500 font-bold text-2xl'>inactivo</option>
                                
                    </select>
                </div>
           
            </form>
            <div className='mb-5 grid justify-items-center'>
                <button
                        className=" bg-primary-color mt-10 w-250 p-2 font-bold text-black rounded cursor-pointer hover:bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 transition-colors  "
                        type="submit"
                        onClick={actProduct}
                        >
                        Guardar Cambios
                </button> 
            </div>
           
       </div>
        
    )
}