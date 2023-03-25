import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import CartItem from "../Cart-item/Cart-item";
import { selectCartItems } from "../../Store/Cart/Cart.selector";

import { 
    CartDropdownContainer, 
    EmptyMessage, 
    CartItems 
} from "./Cart-dropdown.styles";


const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);
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