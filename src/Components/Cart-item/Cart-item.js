import { CartItemContainer, ItemDetails } from "./Cart-item.styles";

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span>{name}</span>
                <span>
                    {quantity} * ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>

    )
}

export default CartItem;