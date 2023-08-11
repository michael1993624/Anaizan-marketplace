import { Link } from "react-router-dom"
import "./TopProduct.scss"


const TopProduct = ({ listProduct }) => {

    return (
        <div className="top-product-section">
            {listProduct.map((list, index) => {
                return (
                    <Link to={""} key={index}>
                        <div className="prod-card-top">
                            <div>
                                <img src={list.img} />
                            </div>
                            <h3>
                                 {list.lib} </h3>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default TopProduct