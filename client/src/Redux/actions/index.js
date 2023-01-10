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
export const SEARCH = 'SEARCH';
export const SET_ERROR = 'SET_ERROR';
export const O_STOCK = 'O_STOCK';
export const PUT_PRODUCT= 'PUT_PRODUCT';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const SEARCH_BY_EMAIL = 'SEARCH_BY_EMAIL';
export const SEARCH_BY_STATUS = 'SEARCH_BY_STATUS';
export const RESET_DETAIL = 'RESET_DETAIL';
export const RESET_FILTERS = 'RESET_FILTERS';
export const PUT_ADMIN_BANNER = 'PUT_ADMIN_BANNER';
export const POST_REVIEWS = 'POST_REVIEWS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const GET_USER_DATA = "GET_USER_DATA";


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
    // console.log(getAllUsers)
    return async function (dispatch) {
        var json = await back_call.get('/users')
        // console.log(json.data)
        return dispatch({
            type: GET_USERS,
            payload: json.data
        })
       
    }
}
export function getUserAdmin() {
    return async function (dispatch) {
        var json = await back_call.get('/users/admin')
        return dispatch({
            type: GET_USER_ADMIN,
            payload: json.data
        })
    }
}
export function getUserData(user) {
    return async function (dispatch) {
        var json = await back_call.post('/user/email', user)
        return dispatch({
            type: GET_USER_DATA,
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

export function resetDetail() {
    return {
        type: RESET_DETAIL
    }
}

export function resetFilters() {
    return {
        type: RESET_FILTERS
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
        // console.log(json)
        return dispatch({
            type: FILTER_S,
            payload: json.data
        })
    }
    
}
export function orderStock(order) {
    return async function (dispatch) {
        var json = await back_call.get(`/product/orderProduct/${order}`);
        console.log(json);
        return dispatch({
            type: O_STOCK,
            payload: json.data
        })
    }
  }
  export const getProduName = (name) => {
    return async function (dispatch) {
        try{
            const json = await back_call.get(
          "/admin/products?name=" + name
        );
        // console.log(json.data);
        return dispatch({ type: SEARCH, payload: json.data });
        } catch (error) {
            dispatch({
              type: SET_ERROR,
              payload: error,
            });
      
     
    };
  };
}

export function getTransactions() {
    return async function (dispatch) {
        var json = await back_call.get('/transactions')
        return dispatch({
            type: GET_TRANSACTIONS,
            payload: json.data
        })
    }
}

export function searchByEmail(email) {
    return async function (dispatch) {
        var json = await back_call.get(`/transactions?email=${email}`)
        return dispatch({
            type: SEARCH_BY_EMAIL,
            payload: json.data
        })
    }
}

export function searchByStatus(status){
    return async function (dispatch) {
        var json = await back_call.get(`/transactions/${status}`)
        return dispatch({
            type: SEARCH_BY_STATUS,
            payload: json.data
        })
    }
}

export function newTransaction(payload) {
    return async function () {
        await back_call.post('/transactions/new', payload)
    }
}

export function putTransaction(payload) {
    return async function () {
        await back_call.post('/transactions/editTransaction', payload)
    }
}

export const postReview = (review, id) => {
    return async function () {
       await back_call.post(`/product/${id}/review`,
            review
        );
    };
  };

export function setCurrentPage(pageNumber) {
    return {
        type: SET_CURRENT_PAGE,
        payload: pageNumber
    }
}

export function putAdmin (id) {
    console.log(`Changing Admin state from Actions stage for id: ${id}`)
    return async function () {
        await back_call.put(`/users/admin/${id}`
        );
    };
}

export function putBan (id) {
    console.log(`Changing Ban state from Actions stage for id: ${id}`)
    return async function () {
        await back_call.put(`/users/ban/${id}`
        );
    };

}

export function deleteUser (id) {
    console.log(`Deleting id ${id} in actions stage`)
    return async function () {
        await back_call.delete(`/users/delete/${id}`
        );
    };

}

