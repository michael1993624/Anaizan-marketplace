import { Link } from "react-router-dom"
import "./CardProductType.scss"
import { RiArrowRightSLine } from "react-icons/ri"
import { Timer } from "../Minuteur/Minuteur";
import Countdown from "react-countdown";

const CardProductType = ({ iconPath, ProductName, linkPage, listProduct, timer }) => {
 
    const timers = <Countdown date={Date.now() + 5011200000} renderer={Timer} />;

    return (
        <>
            <div className="card_prod border-radius-6">
                <div className="heads">
                    <h3>
                        <img src={`/assets/svg/` + iconPath} alt="Icon" />
                        {ProductName}
                        {timer ? timers:null}
                    </h3>
                    <span className="btn-see-all">
                        <a href={linkPage}>
                            See All
                            <RiArrowRightSLine />
                        </a>
                    </span>
                </div>
                <div className="card">
                    {listProduct.map((list, index) => {
                        return (
                            <div className="prod_d" key={index}>
                                <Link to={{ pathname: `/product/detail/${list.title}`}} state={{data:list}}>
                                    <div>
                                        <img src={list.img} alt="" />
                                    </div>
                                    <h3>
                                        <b> ${list.price} </b>
                                        <b className="b">400</b>
                                    </h3>
                                    <p> {list.sold}&nbsp; vendus </p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default CardProductType