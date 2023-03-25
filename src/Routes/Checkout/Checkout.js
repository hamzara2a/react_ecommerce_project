import { selectCartItems, selectCartTotal } from "../../Store/Cart/Cart.selector";
import { useSelector } from "react-redux";
import CheckoutItem from "../../Components/Checkout-item/Checkout-item";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./Checkout.styles";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)

    return(

        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {cartItems.map(cartItem => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>}
                
            )}
            <Total>Total: ${cartTotal}</Total>

        </CheckoutContainer>

    )
}

export default Checkout;