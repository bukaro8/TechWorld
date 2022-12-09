// porque no me deja traerme las actions ?
// import {
//     SEARCH_BY_NAME
// } from './actionsTypes';

import { back_call } from "../../api_connection/back_call"

export const GET_PRODUCTS = "GET_PRODUCTS"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";

export function getAllProducts() {
    return async function (dispatch) {
        var json = await back_call.get("/products")
        return dispatch({
            type: "GET_PRODUCTS",
            payload: json.data.products
        })
    }
}

export const getByName = (name) => {
    return async function (dispatch) {
        var response = await back_call.get(
            `products/findbyname?name=${name}`
        );
        const result = response.data
        return dispatch({
            type: SEARCH_BY_NAME,
            payload: result,
        });
    };
};