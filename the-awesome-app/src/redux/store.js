import { createStore, combineReducers } from 'redux';

// immutable
const storeInitState = {
    message: "Hello redux",
    cart: []
}
const storeReducer = (currentState = storeInitState, action) => {

    if (action.type === "AddItem") {

        const cartItem = action.payload;
        //create a copy
        const cart = [...currentState.cart];
        cart.push(cartItem);
        return {
            ...currentState,
            cart: cart
        };
    }

    
    //return the new/updated state
    return currentState;
}

const authInitState = {

    isAuth: false,
    accessToken: "",
    refreshToken: ""
}
const authReducer = (currentState = authInitState, action) => {

    if(action.type === "SET_AUTH"){

        return {
            ...action.payload
        }

    }

    //return the new/updated state
    return currentState;
}



//store
// export const store = createStore(reducer);
// export const store = createStore(reducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(combineReducers({ auth: authReducer, store: storeReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());