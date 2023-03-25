import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Store/Cart/Cart.action";
import { selectCartItems } from "../../Store/Cart/Cart.selector";
import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button";


import { ProductCardContainer, Footer, Name, Price } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price} = product;

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return (

        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </ProductCardContainer>

    )
}

export default ProductCard;