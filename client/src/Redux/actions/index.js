import {back_call} from "../../api_connection/back_call"
export const GET_PRODUCTS = "GET_PRODUCTS"



export function getAllProducts(){
    return async function(dispatch){
        var json = await back_call.get("/products")
        return dispatch({
            type: "GET_PRODUCTS",
            payload: json.data.products
        })
    }
}