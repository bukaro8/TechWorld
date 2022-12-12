// porque no me deja traerme las actions ?
// import {
//     SEARCH_BY_NAME
// } from './actionsTypes';

import { back_call } from "../../api_connection/back_call"

export const GET_PRODUCTS = "GET_PRODUCTS"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const  CREATE_PRODUCT= "CREATE_PRODUCT";


export function getAllProducts() {
    return async function (dispatch) {
        var json = await back_call.get('/products')
        return dispatch({
            type: GET_PRODUCTS,
            payload: json.data
        })
    }
}
export function searchByName(name) {
    return async function (dispatch) {
        var json = await back_call.get(`/products?name=${name}`)
        return dispatch({
            type: SEARCH_BY_NAME,
            payload: json.data
        })
    }
}
export function newProduct(input) {
    return async function () {
        await back_call.post('/product/new',
          input
       );
       
    };
 }