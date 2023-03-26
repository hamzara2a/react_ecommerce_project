import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../Categories-preview/Categories-preview";
import Category from "../Category/Category";
import { fetchCategoriesAsync } from "../../Store/Categories/Categories.action";
const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchCategoriesAsync());
      }, [dispatch]);

    return ( 
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />}></Route>
        </Routes>
    )

}

export default Shop;

