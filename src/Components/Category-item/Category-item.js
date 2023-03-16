
const CategoryItem = ( { category }) => {
    return (

        <div key={id} 
        className="category-container" 
        style={{backgroundImage: `url(${imageUrl})`}}>

            <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now!</p>
            </div>
            
        </div>



    )
}

export default CategoryItem;