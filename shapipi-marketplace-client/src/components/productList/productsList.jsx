import "./productsList.scss"
import useProductsData from "../../hooks/useProductsData";
import ProductCard from "../productCard/productCard";

function ProductsList() {
    var [productsData, isLoading] = useProductsData([], true);
    const imageUrl = 'http://localhost:3000/miguel.jpg';

    /*var productsCards = productsData.map((product) => {
        return (
            <ProductCard key={product.id} imgSrc={product.obj} />
        )
    })
    if (isLoading) {
        return (
            <h1>tite</h1>
        )
    }
    return (
        <div id="productsList">
            {productsCards}
        </div>
    )*/
    return <img src={productsData} />

}



export default ProductsList;