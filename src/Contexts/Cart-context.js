import { createContext, useReducer } from "react";
import { createAction } from "../Utils/Reducer/Reducer.utils";
const addCartItem = (cartItems, productToAdd) => {

    
    // find if cartItems already contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
        );

    // if found, incerement quantity
    if(existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1 }
            :
            cartItem
        )
    } 


    //empty cart case. We ideally want the object containing all the products we have
    //[{...productToAdd, quantity: 1}]
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
        );
    //check if quantity is equal to 1. If it is, remove the item from checkout
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    // if it isnt, return cartitems with matching card item with one less number
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1 }
        :
        cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => {

    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

}

export const CartContext = createContext({
    isCartOpen: true,
    setIsCartOpen: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartItems: [],
    cartCount: 0,
    cartTotal: 0

})

const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'

}

const INITIAL_STATE = {

    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0

}

const cartReducer = (state, action) => {
    const {type, payload} = action
    
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case  CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled Type ${type} in cartReducer`)
    }
}


export const CartProvider = ({children}) => {
    


    const [
        {
            cartItems, 
            cartCount, 
            cartTotal, 
            isCartOpen
        }, 
        dispatch
    ] = useReducer(cartReducer, INITIAL_STATE);
     

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems)

    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems)
    }
    
    
    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems)
    }

    const setIsCartOpen = (bool) => {
        dispatch(
            createAction(
            CART_ACTION_TYPES.SET_IS_CART_OPEN,
            bool
            ))

    }

    const updateCartItemsReducer = (newCartItems) => {


        //generate newCartCount
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0)

        //generate newCartTotal
        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0)

        //dispatch new actions with payload
        dispatch(
            createAction(
                CART_ACTION_TYPES.SET_CART_ITEMS, {
                    cartItems: newCartItems, 
                    cartTotal: newCartTotal, 
                    cartCount: newCartCount
                }
            ))
    }



    const value = {
        isCartOpen, 
        cartItems, 
        setIsCartOpen, 
        addItemToCart,
        removeItemFromCart, 
        clearItemFromCart,
        cartTotal,
        cartCount }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}