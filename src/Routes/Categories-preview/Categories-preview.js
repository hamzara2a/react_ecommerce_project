import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoriesLoading } from "../../Store/Categories/Categories.selector";
import CategoryPreview from "../../Components/Category-preview/Category-preview";
import Spinner from "../../Components/Spinner/Spinner";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading)
  
    return (
        <Fragment>
          {
            isLoading ? <Spinner />
            :
            
            Object.keys(categoriesMap).map((title) => {
              const products = categoriesMap[title];
              return (
                <CategoryPreview key={title} title={title} products={products} />
              );
            })
          }
      </Fragment>
    );
  };
export default CategoriesPreview;