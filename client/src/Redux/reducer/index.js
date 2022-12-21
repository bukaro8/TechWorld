import { bindActionCreators } from "redux";
import {

  GET_PRODUCTS, 
  SEARCH_BY_NAME,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  FILTER_BY_RATING,
  ORDER_BY_NAME,
  GET_DETAIL,
  ADD_TO_CART,
  REMOVE_ONE_CART,
  DELETE_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  GET_USERS,
  CREATE_USERS,
  GET_USER_ADMIN
} from "../actions/index"

const initialState = {
  productsFix: [],
  allProducts: [],
  admin:[],
  categoryFilter: "all",
  priceFilter: "all",
  ratingsFilter: "all",
  alphabeticalOrder: "all",
  productDetails: [],
  filteredProducts: [],
  searchName:[],
  detail: [],
  cartItems: JSON.parse(localStorage.getItem("items")) || [],
  carts: JSON.parse(localStorage.getItem("cart")) || []

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

        case GET_USER_ADMIN:
                return {
                    ...state,
                    admin: action.payload
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

      

        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }
        case ADD_TO_CART:
          if (state.cartItems.length === 0) {
            let cart = {
                id: action.payload.id,
                name: action.payload.name,
                image: action.payload.image,
                price: action.payload.price,
                quantity: 1
            }
            state.carts.push(cart)
            state.cartItems.push(1)

          }
          else{
            let check = false;
            state.carts.map((item,key)=>{
                if(item.id==action.payload.id){
                    state.carts[key].quantity++;
                    check=true;
                    state.cartItems[0]++
                }
            });
            if(!check){
                let _cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    image:action.payload.image,
                    price:action.payload.price
                }
                state.cartItems[0]++
                state.carts.push(_cart);
            }
        }
          return {
            ...state
          }
        case INCREASE_QUANTITY:
            state.cartItems[0]++
            state.carts.map((item,key)=>{
                if(item.id==action.payload.id){
                    state.carts[key].quantity++;
                }
            });
            return {
                ...state,
            }
        case DECREASE_QUANTITY:
            state.carts.map((item,key)=>{
                if(item.id==action.payload.id){
                    if (state.carts[key].quantity > 1){
                        state.carts[key].quantity--
                        state.cartItems[0]--
                        return {
                            ...state
                        }
                    }
                }
            });
            return {
                ...state
            }
        case REMOVE_ONE_CART:
            if (state.cartItems[0] > 0) {
                let itemsQuantity = state.carts.map((e) => {
                    if (e.id == action.payload.id)
                      return e.quantity
                  })
                let quantity = []
                let getNum = itemsQuantity.map(e => {
                    if (typeof(e) === "number"){
                        quantity.push(e)
                    }
                })
                state.cartItems = [state.cartItems[0] - quantity[0]]
            }
            else{
                state.cartItems[0] = 0
            }
            return {
                ...state,
                carts: state.carts.filter(e => e.id != action.payload.id), 
            }
        case DELETE_CART: {
            return{
                ...state,
                carts: [],
                cartItems: []
            }
        }


      default:
          return state;
  }
}
export default rootReducer;
