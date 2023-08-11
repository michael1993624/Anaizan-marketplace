import "../checkout.scss"

import { incrementDrecrementNumber } from "../../../components/incrementDecrement/incrementDecrement"
import { FaPlus } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { decrementQty, incrementQty } from "../../../store/cartStore/cartSlice"

const CardOrder = ({ listProduct }) => {
    const dispatch = useDispatch()

    return (
        listProduct.map(({id,author, title, image, price, quantity, size, color}, index) => {
            return (
                <div className="prod-order-card" key={index}>
                    <h4 className="d-flex align-items-center">
                        <img src="/assets/svg/house.svg" alt="" />
                        <p> {author} </p>
                    </h4>
                    <div className="prod-order d-flex justify-content-between">
                        <div className="img-order d-flex align-content-center justify-content-center">
                            <img src={image} alt="" />
                        </div>
                        <div className="img-order-info">
                            <h5>
                                {title}
                            </h5>
                            <p> Color :  <b> {color[0]} </b> </p>
                            <p> Size :  <b> {size[0]} </b> </p>
                            <div className="btn-gr d-flex align-items-center justify-content-between">
                                <b> ${price} </b>
                                <div>
                                    <button onClick={() => dispatch(decrementQty({id}))}> - </button>
                                    <span> {quantity} </span>
                                    <button onClick={() => dispatch(incrementQty({id}))}> <FaPlus /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default CardOrder