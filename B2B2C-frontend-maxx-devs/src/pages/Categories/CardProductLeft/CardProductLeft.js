import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./CardProductLeft.scss"


const CardProductLeft = ({ listProduct }) => {

    return (
        <>
            {
                listProduct.map((list, index) => {
                    return (
                        <Link to={""} key={index}>
                            <div className="card-prod-section">
                                <div className="prod-img-card">
                                    <img src={list.img} alt="" />
                                </div>
                                <div className="img-infos">
                                    <h3>
                                        {list.desc}
                                    </h3>
                                    <div>
                                        {new Array(5).fill().map((list, index2) => {
                                            return <span key={index2}> <FaStar /> </span>
                                        })}
                                    </div>
                                    <div>
                                        <p> {list.priceThrougth} </p>
                                        <b> {list.price} </b>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default CardProductLeft