import { FaCheckSquare } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./CardProd.scss"

const CardProd = ({ listPorduct }) => {
    return (

        listPorduct.map((list, index) => {
            return (
                <Link to={""} key={index}>
                    <div className="product-display">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={list.img} />
                        </div>
                        <p>
                            {list.nameProduct}
                        </p>
                        <b> CFA 108 - CFA 324 </b>
                        <h3> $ 2.20 - $ 10.23 </h3>
                        <p>
                            <span> {list.nbPiece} 100 pieces </span>
                            <span> <FaCheckSquare /> verified </span>
                        </p>
                    </div>
                </Link>
            )
        })
    )
}

export default CardProd
