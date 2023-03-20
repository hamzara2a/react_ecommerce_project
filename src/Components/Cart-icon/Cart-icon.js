import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart-context";
import { ShopIcon, CartIconContainer, ItemCount } from "./Cart-icon.styles";
import "./Cart-icon.styles";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShopIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )

}

export default CartIcon;