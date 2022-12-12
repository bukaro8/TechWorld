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
  filteredProducts: [],
  productDetails: []
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
          let categoryFilter = []
          if (action.payload === "all"){
            categoryFilter = state.products;
          } else {
            for(let i=0;i<=state.products.length-1;i++){
                if(state.products[i].category===action.payload){
                    categoryFilter.push (state.products[i]);
              }
              }
            }
          return{
              ...state,
              filteredProducts: categoryFilter.length ? categoryFilter : [`${action.payload} category`]
          };
      case FILTER_BY_RATING: //cambiar ratings de modelo por 1 a 5 estrellas?
          let ratingFilter = []
          if (action.payload === "all"){
          ratingFilter = state.products
          }
          else if (action.payload === "5s"){
            ratingFilter = state.products.filter(p =>p.ratings===5)
          }
          else if (action.payload === "4s"){
            ratingFilter = state.products.filter(p =>p.ratings>=4 && p.ratings<5)
          }
          else if (action.payload === "3s"){
            ratingFilter = state.products.filter(p =>p.ratings>=3 && p.ratings<4)
          }
          else if (action.payload === "2s"){
            ratingFilter = state.products.filter(p =>p.ratings>=2 && p.ratings<3)
          }
          else if (action.payload === "1s"){
              ratingFilter = state.products.filter(p =>p.ratings>=1 && p.ratings<2)
          }
          return{
              ...state,
              filteredProducts: ratingFilter
          };

           /**
           *  case "FILTER_BY_RATING":
          const allRating = state.products
          const ratingFiltered = action.payload === "All" ? allRating : allRating.filter(el => el.ratings.includes(action.payload) )
          
          return {
              ...state,
             filteredProducts: ratingFiltered.length ? ratingFiltered : [`${action.payload} rating`]
          }
           */

      case FILTER_BY_PRICE:
          let priceFilter = []
          if (action.payload === "all"){
          priceFilter = state.products
          }
          else if (action.payload === "100"){
            priceFilter = state.products.filter(p =>p.price<=100)
          }
          else if (action.payload === "500"){
              priceFilter = state.products.filter(p =>p.price>100 && p.price<=500)
            }
          else if (action.payload === "1000"){
              priceFilter = state.products.filter(p =>p.price>500 && p.price<=1000)
            }
          else if (action.payload === "5000"){
              priceFilter = state.products.filter(p =>p.price>1000 && p.price<=5000)
            }
          return{
              ...state,
              filteredProducts: priceFilter
          };

      case ORDER_BY_NAME:
          let nameResult = state.filteredProducts.map(p => {return p})
          if (action.payload === "all"){
            nameResult = state.products
            }
          else if (action.payload === "ase"){
            nameResult.sort((a, b)=>{
              if (a.name > b.name){
                return 1;
              }
              if (a.name < b.name){
                return -1;
              }
              return 0
                }
              )
              /*return {
                ...state,
                filteredProducts: action.payload,
                products: nameResult,
            } */}
          else if (action.payload === "des"){
            nameResult.sort((a, b)=>{
              if(a.name < b.name){
                return 1;
              }
              if(a.name > b.name){
                return -1;
              }
              return 0
                }
              )}
          return{
              ...state,
              filteredProducts: nameResult,
              //products:nameResult
          };
      default:
          return state;
  }
}
export default rootReducer;
