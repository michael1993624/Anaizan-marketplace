import "./CardProductLike.scss"
import { Link } from "react-router-dom"

import like from "../../assets/svg/follow.svg"

const CardProductLike = ({ listProduct }) => {
    return (
        listProduct.map((list, index) => {
            return (
                <div className="bloc-prod-like"  key={index}>
                    <Link to={""}>
                        <div className="imgs">
                            <button> <img src={like} /> </button>
                            <img src={list.img} />
                        </div>
                    </Link>
                    <div className="foots">
                        <h4>
                            High Quality A AMI LEVEL 3 blue
                            green Disposable steri...
                        </h4>
                        <b> {list.price} </b>
                        <p>
                            <span> 1 Piecs(MOQ) </span>
                            <span> 1 Piecs(MOQ) </span>
                            <span> 1-3 Days(Processing time) </span>
                        </p>
                    </div>
                </div>
            )
        })
    )
}

export default CardProductLike