import { Link } from "react-router-dom"
import "./OrderSummaryPrice.scss"

const OrderSummaryPrice = ({ subTotal, shipping, totalPrice, link }) => {
    return (
        <div className="order-summary-price">
            <p>
                SubTotal
                <b> {totalPrice ? `$${totalPrice}`:"$0,00"} </b>
            </p>
            <p>
                Shipping
                <b> {shipping ? `$${shipping}`:"$0,00"} </b>
            </p>
            <p>
                <span> Total </span>
                <b> {totalPrice ? `$${totalPrice}`:"$0,00"} </b>
            </p>
        </div>
    )
}

export default OrderSummaryPrice