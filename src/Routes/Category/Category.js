import { useState, useEffect, Fragment } from "react";
import { selectCategoriesMap, selectIsCategoriesLoading } from "../../Store/Categories/Categories.selector";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CategoryContainer, CategoryTitle } from "./Category.styles.js";

import ProductCard from "../../Components/ProductCard/ProductCard";
import Spinner from "../../Components/Spinner/Spinner";


const Category = () => {

    //we will get 'category' as a parameter.
    // this parameter was defined at Shop.js
    const { category } = useParams(); 
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        //the && tells the code 'hey, don't render this code before the products have asynchronously arrived at the state
       
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? <Spinner /> 
                : 
                <CategoryContainer>
                    {
                        products && products.map((product) => (
                        <ProductCard key={product.id} product={product} /> 
                        )
                        )
                    }
                </CategoryContainer>
            }
            
        </Fragment>
    )
}

export default Category;
