import CardProductLike from "../../components/CardProductLike/CardProductLike"
import "./ProductDisplay.scss"
import { FaChevronDown } from "react-icons/fa"

const ProductDisplay = ({ listProduct, title, sort }) => {

    const items = [
        { item: "All" },
        { item: "Electronic" },
        { item: "Apparel" },
        { item: "Phones" },
        { item: "Fabric&Textile" },
        { item: "Jewerlry&Watches" }
    ]
    return (
        <div className="block_products">
            <h3>Catégorie</h3>
            <div className="headd d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    {items.map(({ item }, index) => {
                        return <button className="d-flex align-items-center justify-content-center" key={index}> {item} </button>
                    })}
                </div>
                <button className="view-more-btn"> View more &nbsp; <FaChevronDown /> </button>
            </div>
            {sort}
            <div className="div-prod-official">
                <CardProductLike listProduct={listProduct} />
            </div>
            <button id="btns"> Load more </button>
        </div>
    )
}

export default ProductDisplay