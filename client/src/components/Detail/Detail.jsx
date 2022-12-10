import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//? Todavia no se realiza la action 
// import {getDetails} from '../../Redux/actions/actionsTypes';
import { Link } from 'react-router-dom';
import Loader from './Loader.gif';
const loader = Loader;

const Detail = (/* props */) => {

    //! Descomentar cuando pueda utilizar las actions
    // const dispatch = useDispatch();
    // const id = props.match.params.id;

    const PRODUCT = useSelector((state) => state.detail)

    // useEffect(() =>[
    //     getDetail(id)
    // ],[dispatch,id]);

    return (
        <div className='detailFather'>
            {/* Two Buttons with Link for back to home and create product  */}
            <Link to='/home'><button className='buttonHome'>Back To Home</button></Link>
            <Link to='/newProduct'><button className='buttonHome'>Create Product</button></Link>

            <div className='caracts'>
                {
                    PRODUCT.length > 0 ?
                        <div>
                            <h1 className='title'>{PRODUCT[0].name}</h1>
                            <ul className='all-caracts'>
                                <li>
                                    <div className='ftsColumn'>
                                        <img src={PRODUCT[0].image} alt={PRODUCT[0].name} />
                                        <h3>Rating:</h3>
                                        <span>{PRODUCT[0].ratings}</span>
                                        <h3>Number of Reviews: </h3>
                                        <span>{PRODUCT[0].numOfReviews}</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <ul className='categories'>
                                            <h3 className='caracts'>Category</h3>
                                            <h4>{PRODUCT[0].category}</h4>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className='secColumn'>
                            <h3 className='price'><strong>Price:</strong></h3>
                            <span>{PRODUCT[0].price}</span>
                            <h3 className='seller'><strong>Seller:</strong></h3>
                            <span>{PRODUCT[0].seller}</span>
                            <h3 className='stock'><strong>Stock:</strong></h3>
                            <span>{PRODUCT[0].stock}</span>
                            <details className='description'>
                                <summary>Description:</summary>
                                <p>{PRODUCT[0].description}</p>
                            </details>
                            
                            </div>
                        </div>
                        : <div className='loadingScreen'>
                            Loading...

                            {loader}
                        </div>
                }
            </div>

        </div>
    );
}

export default Detail;


/* 
            /* Search the state with conditional and making of the css 
            
                /* Example 
                product.length > 0 ?
                <div>
                    <h1 className='name'>{product[0].name}</h1>
                    <ul className='ul'>
                        <li>
                            <div>
                                <img src={product[0].image} alt={product[0].name} className='image' />
                            </div>
                        </li>
                        <li>
                            <div>
                                {/* Make a conditional for, if product[0].category.length > 10 put a h4 with Categories and not Category
                                <h4 className='details'>Category</h4>
                                <ul className='categories'>
                                    {product[0].category ? 
                                        product[0].category?.map((el) =>{
                                            return <li key={el.description}><label>{el.name}</label></li>
                                        })
                                        : product[0].category ?
                                            product[0].category.split(', ').map(el => {
                                                return <li key={el}><label>{el}</label></li>
                                            }) : 'No Category was assinged to this product'
                                }
                                </ul>
                                <h4 className='details'> 
                                 Here goes more details like price, stock, etc. 
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div> 
                : <div className='loadingScreen'><h1><strong>
                    Loading...
                    /* Later i gonna to use Pure CSS Loader for spinners loaders 
                    </strong></h1></div>
            
*/
