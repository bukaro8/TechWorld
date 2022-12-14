import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newProduct, getAllProducts } from '../../Redux/actions/index';
import Card from '../Cards/Card'

// import validate from './Validate';



//  function validate(input, product){
//     let errors = {};
//     let RegExpression = /^[a-zA-Z\s]*$/;  
// //Ejemplo con prop: name
//     if(!input.name){
//         errors.name = 'A name is required'
//     }
//     if(product.indexOf( input.name ) !== -1){
//         errors.name = 'A product with that name is already existing'
//     }
//     if(!RegExpression.test(input.name)){
//         errors.name = 'Numbers or special characters are not allowed'
//     }


// return errors;
// }

export default function Create() {

    const dispatch = useDispatch();

    const products = useSelector(state => state.products)

    const history = useHistory()

    const [errors, setErrors] = useState({})
    const [section, setSection] = useState(1);


    const [input, setInput] = useState({
        name: "",
        price: "",
        description: "",
        ratings: "",
        images: "",
        category: "",
        seller: "",
        stock: "",
        numOfReviews: "",

    })


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " ")
        })

        // setErrors(validate({
        //     ...input,
        //     [e.target.name] : e.target.value
        // }, products))
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (Object.keys(errors).length === 0 && input.name.length) {
            dispatch(newProduct(input));
            dispatch(getAllProducts());
            alert("Ceated successfuly!");
            setInput({
                name: "",
                price: "",
                description: "",
                ratings: "",
                images: "",
                category: "",
                seller: "",
                stock: "",
                numOfReviews: "",

            })
            history.push("/home")
        } else {
            alert("You must be...");
        }
    }


    return (
        <div class="">

            <Link to='/' class="bg-blue-700 m-2 rounded p-2 "
            >
                <button>Return home</button>
            </Link>

            <div class="">

                <div class='flex justify-center p-10'>
                    <h2>Create your product!</h2>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} class="">
                    <section class="mx-40">
                        <div class="">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Name</label>
                            <input
                                type="text"
                                value={input.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                                style={input.name.length ? errors.name ? { borderColor: '#e74c3c' } : { borderColor: '#2ecc71' } : {}}
                                autocomplete="off"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                            />
                            {/* {
                            errors.name ? (
                                <div>
                                <p>{errors.name}</p>
                                </div>
                            ) :
                            input.name.length ?
                            <i style={{color: '#2ecc71'}}></i>
                            :
                            <i></i>
                        } */}
                        </div>
                        <div>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Price</label>
                            <input
                                type="number"
                                value={input.price}
                                name="price"
                                onChange={(e) => handleChange(e)}
                                style={input.price.length ? errors.price ? { borderColor: '#e74c3c' } :
                                    { borderColor: '#2ecc71' } : {}}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                            />
                            {/* {
                            errors.price ? (
                                <div>
                                <i style={{color: '#e74c3c'}}></i>
                                <p>{errors.hp}</p>
                                </div>
                            ) :
                            input.hp.length ?
                            <i style={{color: '#2ecc71'}}></i>
                            :
                            <i></i>
                        } */}
                        </div>
                        <div>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Description</label>
                            <input
                                type="text"
                                value={input.description}
                                name="description"
                                onChange={(e) => handleChange(e)}
                                style={input.description.length ? errors.description ? { borderColor: '#e74c3c' } :
                                    { borderColor: '#2ecc71' } : {}}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                            />
                            {/* {
                            errors.description ? (
                                <div>
                                <i  style={{color: '#e74c3c'}}></i>
                                <p>{errors.description}</p>
                                </div>
                            ) :
                            input.attack.description ?
                            <i  style={{color: '#2ecc71'}}></i>
                            :
                            <i></i>
                        } */}
                        </div>
                        <div>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Ratings</label>
                            <input
                                type="number"
                                value={input.ratings}
                                name="ratings"
                                onChange={(e) => handleChange(e)}
                                style={input.ratings.length ? errors.rating ? { borderColor: '#e74c3c' } :
                                    { borderColor: '#2ecc71' } : {}}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                            />
                            {/* {
                             errors.ratings ? (
                                <div>
                                <i className="fas fa-exclamation-circle" style={{color: '#e74c3c'}}></i>
                                <p>{errors.rating}</p>
                                </div>
                            ) :
                            input.ratings.length ?
                            <i  style={{color: '#2ecc71'}}></i>
                            :
                            <i></i>
                        } */}
                            <div>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">images</label>
                                <input
                                    type="array"
                                    value={input.images}
                                    name="images"
                                    onChange={(e) => handleChange(e)}
                                    style={input.images.length ? errors.images ? { borderColor: '#e74c3c' } :
                                        { borderColor: '#2ecc71' } : {}}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                />
                            </div>
                            <div>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">category</label>
                                <input
                                    type="string"
                                    value={input.category}
                                    name="category"
                                    onChange={(e) => handleChange(e)}
                                    style={input.category.length ? errors.category ? { borderColor: '#e74c3c' } :
                                        { borderColor: '#2ecc71' } : {}}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                />
                            </div>
                            <div>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Seller</label>
                                <input
                                    type="string"
                                    value={input.seller}
                                    name="seller"
                                    onChange={(e) => handleChange(e)}
                                    style={input.seller.length ? errors.seller ? { borderColor: '#e74c3c' } :
                                        { borderColor: '#2ecc71' } : {}}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                />
                            </div>
                            <div>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Stock</label>
                                <input
                                    type="number"
                                    value={input.stock}
                                    name="stock"
                                    onChange={(e) => handleChange(e)}
                                    style={input.stock.length ? errors.stock ? { borderColor: '#e74c3c' } :
                                        { borderColor: '#2ecc71' } : {}}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                />
                            </div>
                            <div>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Reviews</label>
                                <input
                                    type="number"
                                    value={input.numOfReviews}
                                    name="numOfReviews"
                                    onChange={(e) => handleChange(e)}
                                    style={input.numOfReviews.length ? errors.numOfReviews ? { borderColor: '#e74c3c' } :
                                        { borderColor: '#2ecc71' } : {}}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                />
                            </div>
                        </div>
                    </section>
                    <button class="bg-slate-500 m-2 rounded p-2 mt-10 bg-red-700"type="submit">Crear Products</button>
                </form>
            </div>

            <div class='flex '>
                <div class='mx-60'>
                    <Card />
                </div>
            </div>

        </div >
    )
}
 