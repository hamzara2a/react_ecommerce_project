import { createContext, useState } from "react";

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
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}

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

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))

    }
    const value = {isCartOpen, cartItems, setIsCartOpen, addItemToCart }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}