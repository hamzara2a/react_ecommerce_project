import { Fragment } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/Categories-context";
import ProductCard from "../../Components/ProductCard/ProductCard";

import "./Shop.scss";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            
            {Object.keys(categoriesMap).map((title) => {
                return <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className="products-container">
                        {categoriesMap[title].map((product) => {
                        return <ProductCard key={product.id} product={product} />       
                        })}
                    </div>
                </Fragment>
            })
        } 
        </Fragment>

    )

}

export default Shop;