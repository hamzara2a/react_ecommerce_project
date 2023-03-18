import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../Contexts/Cart-context";
import Button from "../Button/Button";
import CartItem from "../Cart-item/Cart-item";

import "./Cart-dropdown.scss";


const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    } 
    
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT!</Button>
        </div>

    )
}

export default CartDropdown;