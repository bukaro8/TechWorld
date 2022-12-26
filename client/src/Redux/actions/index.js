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
export const CREATE_USERS = "CREATE_USERS";
export const GET_USERS = "GET_USERS"
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_CART = "REMOVE_ONE_CART"
export const DELETE_CART = "DELETE_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const GET_USER_ADMIN = "GET_USER_ADMIN";
export const FILTER_S = 'FILTER_S';
export const PUT_PRODUCT= 'PUT_PRODUCT';


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
    console.log(getAllUsers)
    return async function (dispatch) {
        var json = await back_call.get('/users')
        return dispatch({
            type: GET_USERS,
            payload: json.data
        })
       
    }
}
export function getUserAdmin() {
    return async function (dispatch) {
        var json = await back_call.get('/admin')
        return dispatch({
            type: GET_USER_ADMIN,
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
    return async function (dispatch) {
        var infoDetail = await (await back_call.get(`/product/${id}`)).data.productTotal;
        return dispatch({
            type: GET_DETAIL,
            payload: infoDetail
        })

    }
}


export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export function removeOneProduct(payload) {
    return {
        type: REMOVE_ONE_CART,
        payload
    }
}

export function increaseQuantity(payload) {
    return {
        type: INCREASE_QUANTITY,
        payload
    }
}

export function decreaseQuantity(payload) {
    return {
        type: DECREASE_QUANTITY,
        payload
    }
}

export function deleteCart(payload) {
    return {
        type: DELETE_CART,
        payload
    }
}
export const putProdut = (input) => {
    return async function() {
     await back_call.post(`/product/editProduct`,input);
    }
}
export const filState = (input) => {
    
    return async function (dispatch) {
        var json = await back_call.get(`/product/filterProduct/${input}`);
        console.log(json)
        return dispatch({
            type: FILTER_S,
            payload: json.data
        })
    }
    
}
