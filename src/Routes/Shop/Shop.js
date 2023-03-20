import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/Categories-preview";
import Category from "../Category/Category";
import "./Shop.scss";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />}></Route>
        </Routes>
    )

}

export default Shop;

