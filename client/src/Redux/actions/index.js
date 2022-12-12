// porque no me deja traerme las actions ?
// import {
//     SEARCH_BY_NAME
// } from './actionsTypes';

import { back_call } from "../../api_connection/back_call"

export const GET_PRODUCTS = "GET_PRODUCTS"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_RATING = "FILTER_BY_RATING";
export const FILTER_BY_PRICE = "FILTER_BY_TYPE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";

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

export function filterByCategory (selected){
    return {
        type: FILTER_BY_CATEGORY,
        payload: selected
    }
}

export function filterByRating (selected){
    return {
        type: FILTER_BY_RATING,
        payload: selected
    }
}

export function filterByPrice (range){
    return {
        type: FILTER_BY_PRICE,
        payload: range
    }
}

export function orderByName (how){
    return {
        type: ORDER_BY_NAME,
        payload: how
    }
}