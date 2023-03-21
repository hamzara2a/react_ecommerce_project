import { useContext } from "react";

import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button";
import { CartContext } from "../../Contexts/Cart-context";


import { ProductCardContainer, Footer, Name, Price } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
    const { name, imageUrl, price} = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

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