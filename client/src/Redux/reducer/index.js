import { GET_PRODUCTS } from "../actions/index"

const initialState={
    products: [],
    filteredProducts: [],
    productDetails: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload,
                filteredProducts: action.payload
            };
        default:
            return state;
    }
}
export default rootReducer;
