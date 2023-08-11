import { RiArrowRightSLine } from "react-icons/ri"
import { Link } from "react-router-dom";
import "./BoxProductShipping.scss";

import top from "../../assets/svg/top.svg"


const BoxProductShipping = ({ label, link, listProduct }) => {
    return (
        <div className="card-prod-group border-radius-6 overflow-hidden">
            <div className="head-prod-rank">
                <h3> {label} </h3>
                {/* <a href={link}>
                    <span > See All <RiArrowRightSLine /> </span>
                </a> */}
            </div>
            <div className="content-prod-rank">
                {listProduct.map((list, index) => {
                    return (
                        <div className="card-prod-rank" key={index}>
                            <Link to={`/product/details`}>
                                <div className="product-rank d-flex align-items-center justify-content-center">
                                    <img src={top} />
                                    <img src={list.img} />
                                </div>
                            </Link>
                            <h4> {list.title} </h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default BoxProductShipping