import './productCard.scss'
function ProductCard({ imgSrc }) {
    return (
        <div className="card">
            <img src={imgSrc}></img>
        </div>
    )

}

export default ProductCard