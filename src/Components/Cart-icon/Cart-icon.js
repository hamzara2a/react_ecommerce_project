import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../Store/Cart/Cart.selector";
import { setIsCartOpen } from "../../Store/Cart/Cart.action";
import { ShopIcon, CartIconContainer, ItemCount } from "./Cart-icon.styles";
import "./Cart-icon.styles";

const CartIcon = () => {
    
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    //const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
   
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShopIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )

}

export default CartIcon;