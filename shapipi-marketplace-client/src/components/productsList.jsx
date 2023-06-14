import useProductsData from "../hooks/useProductsData";
import ProductCard from "./productCard";

function ProductsList() {
    var productsData = useProductsData([]);
    var products = (productsData) =>
        productsData.map(
            (product, index) => {
                return (
                    <ProductCard myKey={index} imgSrc={product.url} />
                )
            }
        )
    return (
        <div id="productsList">
            {products(productsData)}
        </div>
    )
}



export default ProductsList;