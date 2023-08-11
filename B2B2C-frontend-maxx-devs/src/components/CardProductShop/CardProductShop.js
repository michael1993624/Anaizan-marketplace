import "./CardProductShop.scss"
import verified from "../../assets/svg/verified.svg";
import { Link } from "react-router-dom";

const CardProductShop = ({ listProduct }) => {

    return (
        listProduct.map((list, index) => {
            return (
                <div className="content-prodt" key={index}>
                    <div className="heads">
                        <h4>
                            <img src="/assets/svg/house.svg" alt="" />
                            Shenzhen Feiny  Co., Ltd
                        </h4>
                        <p>
                            <span> {list.year} </span>
                            <span>
                                <a href=""></a>
                                <img src={verified} alt="" />
                                Verified <b> Seller </b>
                            </span>
                        </p>
                    </div>
                    <Link to={""}>
                        <div className="imgs d-flex align-items-center justify-content-center">
                            <img src={list.img} alt="" />
                        </div>
                    </Link>
                </div>
            )
        })
    )
}

export default CardProductShop