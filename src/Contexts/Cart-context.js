import { createContext, useState, useEffect } from "react";

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
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    cartTotal: 0

})

// product

// id,
// name,
// price,
// imageUrl
// quantity


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(CartContext)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))

    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))

    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))

    }

    const value = {isCartOpen, 
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