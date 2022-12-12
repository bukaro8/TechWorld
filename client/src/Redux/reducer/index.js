import {
  GET_PRODUCTS, 
  SEARCH_BY_NAME,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  FILTER_BY_RATING,
  ORDER_BY_NAME 
} from "../actions/index"

const initialState = {
  products: [],
  allProducts: [],
  categoryFilter: "all",
  priceFilter: "all",
  ratingsFilter: "all",
  alphabeticalOrder: "all",
  productDetails: [],
  filteredProducts: []
}

function rootReducer(state = initialState, action) {

  switch (action.type) {
      case GET_PRODUCTS:
          return {
              ...state,
              products: action.payload,
              filteredProducts: action.payload,
              allProducts: action.payload,
          };

      case SEARCH_BY_NAME:
          return {
              ...state,
              products: action.payload
          };

      case FILTER_BY_CATEGORY:
          return{
              ...state,
              categoryFilter: action.payload,
          };

      case FILTER_BY_RATING: //cambiar ratings de modelo por 1 a 5 estrellas?
          return{
              ...state,
              ratingsFilter: action.payload,
          };

      case FILTER_BY_PRICE:
          return{
              ...state,
              priceFilter: action.payload,
          };

      case ORDER_BY_NAME:
          return{
              ...state,
              alphabeticalOrder: action.payload,
          };
      default:
          return state;
  }
}
export default rootReducer;
