import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

// the actual value I want to access
export const ProductsContext = createContext({
    products: []

})

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState(PRODUCTS);
    const value = { products }
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}





 