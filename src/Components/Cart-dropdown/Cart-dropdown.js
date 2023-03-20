import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../Contexts/Cart-context";
import Button from "../Button/Button";
import CartItem from "../Cart-item/Cart-item";

import { 
    CartDropdownContainer, 
    EmptyMessage, 
    CartItems 
} from "./Cart-dropdown.styles";


const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    } 
    
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? 
                    (cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
                    : (
                        <EmptyMessage>Your cart is empty!</EmptyMessage>
                    )

                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>CHECKOUT!</Button>
        </CartDropdownContainer>

    )
}

export default CartDropdown;