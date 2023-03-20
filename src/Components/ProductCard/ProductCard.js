import { useContext } from "react";

import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button";
import { CartContext } from "../../Contexts/Cart-context";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
    const { name, imageUrl, price} = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (

        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </div>

    )
}

export default ProductCard;