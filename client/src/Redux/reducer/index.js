import {
    GET_PRODUCTS,
    SEARCH_BY_NAME,

} from "../actions/index"

const initialState = {
    products: [],
    filteredProducts: [],
    productDetails: []
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                filteredProducts: action.payload
            };
        case SEARCH_BY_NAME:
            return {
                ...state,
                products: action.payload
            }
        case "POST_PRODUCT":
            return {
                ...state,
            };
        default:
            return state;
    }
}
export default rootReducer;
