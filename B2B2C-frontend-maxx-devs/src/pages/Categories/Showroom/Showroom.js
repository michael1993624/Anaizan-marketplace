import { RiArrowRightSLine } from "react-icons/ri"
import "./Showroom.scss"

const Showroom = ({ listProduct, link }) => {
    return (
        <div id="room-section">
            <div className="head-room">
                <h3> <img src="/assets/svg/manufact.svg" /> 360° view Shops </h3>
                <a href={link}>
                    <span > See All <RiArrowRightSLine /> </span>
                </a>
            </div>
            <div className="bodys">
                {
                    listProduct.map((list, index) => {
                        return (
                            <div key={index} className="card">
                                <img src={list.img} alt="" />
                                <h3>
                                   {list.yearExp} Years of experience of filling and
                                    labeling industry
                                </h3>
                                <b> Showroom </b>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Showroom