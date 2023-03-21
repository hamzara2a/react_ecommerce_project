import { CategoryPreviewContainer, Title, Preview } from "./Category-preview.styles"; 
import ProductCard from "../ProductCard/ProductCard";

const CategoryPreview = ({ title, products }) => {
    return(
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>
                    {title.toUpperCase()}
                </Title> {/* This way, the click happens when the text is clicked, not when the h2 'box' is clicked */}
            </h2>
            <Preview>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => 
                        (<ProductCard key={product.id} product={product} /> )
                        )
                }
            </Preview>

        </CategoryPreviewContainer>

    )
}

export default CategoryPreview;