import { useContext } from "react";
import { ReactComponent as ShopIcon  } from "../../Assets/shopping-bag.svg";
import { CartContext } from "../../Contexts/Cart-context";
import "./Cart-icon.scss";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
    return(
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShopIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )

}

export default CartIcon;