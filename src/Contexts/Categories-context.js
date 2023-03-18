import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments  } from "../Utils/Firebase/Firebase";
// the actual value I want to access
export const CategoriesContext = createContext({
    categoriesMap: {}

})

export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    // put the async INSIDE the useEffect here
    useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);


    // this useEffect should only be a one-off thing. After using it once, then remove it
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])
    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}





 