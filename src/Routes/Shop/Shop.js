import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../Store/Categories/Categories.action";
import { getCategoriesAndDocuments } from "../../Utils/Firebase/Firebase";
import CategoriesPreview from "../Categories-preview/Categories-preview";
import Category from "../Category/Category";

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
          const categoriesArray = await getCategoriesAndDocuments('categories');
          dispatch(setCategories(categoriesArray));
        };
    
        getCategoriesMap();
      }, [dispatch]);

    return ( 
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />}></Route>
        </Routes>
    )

}

export default Shop;

