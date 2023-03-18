import { useContext } from "react";
import { ProductsContext } from "../../Contexts/Product-context";
import ProductCard from "../../Components/ProductCard/ProductCard";

import "./Shop.scss";

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className="products-container">
            {products.map((product) => {
                return (<div key={product.id}>
                    <ProductCard product={product} />
                </div>
                )
            })}
        </div>
    )

}

export default Shop;