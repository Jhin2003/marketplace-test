import '../styles/productCard.scss'
function ProductCard({ myKey, imgSrc }) {
    return (
        <div key={myKey} className="card">
            <img src={imgSrc}></img>
        </div>
    )

}

export default ProductCard