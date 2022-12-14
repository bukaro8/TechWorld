import {
    GET_PRODUCTS,
    SEARCH_BY_NAME,
    FILTER_BY_CATEGORY,
    FILTER_BY_PRICE,
    FILTER_BY_RATING,
    ORDER_BY_NAME,
    GET_USERS,
    CREATE_USERS,
    GET_DETAIL

} from "../actions/index"

const initialState = {
    users: [],
    productsFix: [],
    allProducts: [],
    categoryFilter: "all",
    priceFilter: "all",
    ratingsFilter: "all",
    alphabeticalOrder: "all",
    productDetails: [],
    filteredProducts: [],
    searchName: [],
    detail: [],

}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productsFix: action.payload,
                filteredProducts: action.payload,
                allProducts: action.payload,
                searchName: action.payload
            };
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };

        case SEARCH_BY_NAME:
            return {
                ...state,
                searchName: action.payload
            };

        case FILTER_BY_CATEGORY:
            return {
                ...state,
                categoryFilter: action.payload,
            };

        case FILTER_BY_RATING: //cambiar ratings de modelo por 1 a 5 estrellas?
            return {
                ...state,
                ratingsFilter: action.payload,
            };

        case FILTER_BY_PRICE:
            return {
                ...state,
                priceFilter: action.payload,
            };

        case ORDER_BY_NAME:
            return {
                ...state,
                alphabeticalOrder: action.payload,
            };
        case "POST_PRODUCT":
            return {
                ...state,
            };
        case CREATE_USERS:
            return {
                ...state,
            };

        default:
            return state;
    }

        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }
      default:
          return state;
  }
}
export default rootReducer;
