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
    GET_USER_ADMIN,
    PUT_PRODUCT,
    FILTER_S,
    SEARCH,
    SET_ERROR,
    O_STOCK,
    GET_TRANSACTIONS,
    SEARCH_BY_EMAIL,
    SEARCH_BY_STATUS,
    GET_LAST_TRANSACTIONS,
    RESET_DETAIL,
    RESET_FILTERS,
    POST_REVIEWS
} from "../actions/index"

const initialState = {
    users:[],
    productsFix: [],
    allProducts: [],
    admin:[],
    categoryFilter: "all",
    priceFilter: "all",
    ratingsFilter: "all",
    alphabeticalOrder: "all",
    productDetails: [],
    filteredProducts: [],
    searchName: [],
    detail: [],
    cartItems: JSON.parse(localStorage.getItem("items")) || [],
    carts: JSON.parse(localStorage.getItem("cart")) || [],
    filterState: [],
    
    transactions: [],
    filteredTransactions: [],
    searchMail: [],

    resultPost: {},

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
            return {
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
                    quantity: 1,
                    stock: action.payload.stock
                }
                state.carts.push(cart)
                state.cartItems.push(1)

            }
            else {
                let check = false;
                state.carts.map((item, key) => {
                    if (item.id == action.payload.id) {
                        if (state.carts[key].stock > state.carts[key].quantity) {
                            state.carts[key].quantity++;
                            state.cartItems[0]++
                        }
                        check = true
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price,
                        stock: action.payload.stock
                    }
                    state.cartItems[0]++
                    state.carts.push(_cart);
                }
            }
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            state.carts.map((item, key) => {
                if (item.id == action.payload.id) {
                    if (state.carts[key].stock > state.carts[key].quantity) {
                        state.carts[key].quantity++;
                        state.cartItems[0]++
                    }
                }
            });
            return {
                ...state,
            }
        case DECREASE_QUANTITY:
            state.carts.map((item, key) => {
                if (item.id == action.payload.id) {
                    if (state.carts[key].quantity > 1) {
                        state.carts[key].quantity--
                        state.cartItems[0]--
                        return {
                            ...state,
                        }
                    }
                }
            });
            return {
                ...state,
            }
        case REMOVE_ONE_CART:
            if (state.carts.length > 1) {
                let itemsQuantity = state.carts.map((e) => {
                    if (e.id == action.payload.id)
                        return e.quantity
                })
                let quantity = []
                let getNum = itemsQuantity.map(e => {
                    if (typeof (e) === "number") {
                        quantity.push(e)
                    }
                })
                state.cartItems = [state.cartItems[0] - quantity[0]]
                state.carts = state.carts.filter(e => e.id != action.payload.id)
            }
            else {
                state.cartItems[0] = 0
                state.carts = []
                localStorage.removeItem("cart")
                localStorage.removeItem("items")
            }
            return {
                ...state,
            }
        case DELETE_CART: {
            state.carts = []
            state.cartItems = []
            localStorage.removeItem("cart")
            localStorage.removeItem("items")
            return {
                ...state,
            }
        }
        case PUT_PRODUCT:
            return {
                ...state,
            };
        case FILTER_S:
            return {
                ...state,
                filterState: action.payload
            };
        case SEARCH:
            return {
                ...state,
                filterState: action.payload,
                error: undefined,
            };
        
        case SET_ERROR:
        return {
            ...state,
            error: action.payload,
            allProducts: [],
            filterState: [],
        };
    
        case O_STOCK:
        return {
            ...state,
            filterState: action.payload,
        };
        case GET_TRANSACTIONS:
            return {
                ...state, 
                transactions: action.payload,
                filteredTransactions: action.payload
            };
        case SEARCH_BY_EMAIL:
            return {
                ...state,
                searchMail: action.payload
            }
        case SEARCH_BY_STATUS:
            return {
                ...state,
                filteredTransactions: action.payload
            }
        case RESET_DETAIL:
            return {
                ...state,
                detail: []
            }
        case RESET_FILTERS:
            return {
                ...state,
                categoryFilter: "all",
                ratingsFilter: "all",
                priceFilter: "all",
                alphabeticalOrder: "all",
            }
            case POST_REVIEWS: {
                return {
                  ...state,
                  resultPost: action.payload,
                };
              }
        default:
            return state;
    }
}
export default rootReducer;