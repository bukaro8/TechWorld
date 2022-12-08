import axios from "axios"
export const GET_PRODUCTS = "GET_PRODUCTS"

var url = "http://localhost:3001/api/v1/"

export function getAllProducts(){
    return async function(dispatch){
        var json = await axios.get(url + "products")
        console.log(json)
        return dispatch({
            type: "GET_PRODUCTS",
            payload: json.data.products
        })
    }
}