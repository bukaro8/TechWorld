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
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_USERS = "CREATE_USERS";
export const GET_USERS = "GET_USERS"
export const GET_DETAIL = 'GET_DETAIL';


export function getAllProducts() {
    return async function (dispatch) {
        var json = await back_call.get('/products')
        return dispatch({
            type: GET_PRODUCTS,
            payload: json.data
        })
    }
}
export function getAllUsers() {
    return async function (dispatch) {
        var json = await back_call.get('/users')
        return dispatch({
            type: GET_USERS,
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
export function newUsers(input) {
    return async function () {
        await back_call.post('/user/new',
            input
        );

    };
}
export function filterByCategory(selected) {
    return {
        type: FILTER_BY_CATEGORY,
        payload: selected
    }
}

export function filterByRating(selected) {
    return {
        type: FILTER_BY_RATING,
        payload: selected
    }
}

export function filterByPrice(range) {
    return {
        type: FILTER_BY_PRICE,
        payload: range
    }
}

export function orderByName(how) {
    return {
        type: ORDER_BY_NAME,
        payload: how
    }
}

export const getDetail = (id) => {
    return async function(dispatch) {
    var infoDetail = await back_call.get(`/products/${id}`).data;
    return dispatch({
        type: GET_DETAIL,
        payload: infoDetail
    })
        
    }
}
