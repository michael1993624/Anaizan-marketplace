import { useModal, UseModal } from "react-hooks-use-modal"
import { useState } from "react"
import { useDispatch } from "react-redux"
import "../Cart.scss"
import { incrementDrecrementNumber } from "../../../components/incrementDecrement/incrementDecrement"
import { FaPlus } from "react-icons/fa"
import { decrementQty, incrementQty, saveItem } from "../../../store/cartStore/cartSlice"

const CartItem = ({ listProduct, actionPopup, actionPopup2 }) => {
    const dispatch = useDispatch()
    const [selectValue, setSelectValue] = useState ({
        color: "",
        size: ""
    })

    const handleChange = (e) => {
        setSelectValue({
            ...selectValue,
            [e.target.name] : e.target.value
        })
    }

    const OpenPopupRemove = (item_id) => {
        sessionStorage.setItem("item_id",item_id)
        actionPopup(true)
    }

    const saveItemCart = (id) => {
        let color = selectValue.color,
            size = selectValue.size;

        dispatch(saveItem({id, color, size}))
        actionPopup(true)
        actionPopup2(2)
    }

    return (
        <>
            <div className="card-item-cart">

                {listProduct.map(({ id, title, image, price, quantity, author, size, color, quantity_max }, index) => {
                    return (
                        <div className="" key={index}>
                            <div className="head-cart d-flex align-items-center justify-content-between">
                                <h3 className="d-flex align-items-center">
                                    <input type="checkbox" name="" id="" />
                                    <img src="/assets/svg/house.svg" alt="" />
                                    {author}
                                </h3>
                                <button className="d-flex align-items-center">
                                    <img src="/assets/svg/chats.svg" alt="" />
                                    Chat&nbsp;Now
                                </button>
                            </div>
                            <div className="card-prod-item" key={index}>
                                <input type="checkbox" name="" id="" />
                                <div className="item-div d-flex justify-content-between">
                                    <div className="img-item">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="info-item">
                                        <h4>
                                            <span>
                                                {title}
                                            </span>
                                            <span> ${price} </span>
                                        </h4>
                                        <p className="div1-info">
                                            <b> {quantity_max} Qty </b>
                                            <span> In Stock </span>
                                        </p>
                                        <div className="last-div-info d-flex align-items-center justify-content-between ">
                                            <div className="child d-flex align-items-center">
                                                <select name="size" id="size"
                                                value={selectValue.size}
                                                onChange={handleChange}>
                                                    {
                                                        size && (
                                                            size.map((item, index) => {
                                                                return <option value={item} key={index}> {item} </option>
                                                            })
                                                        )
                                                    }
                                                </select>
                                                <select name="color" id="color"
                                                value={selectValue.color}
                                                onChange={handleChange}>
                                                    {
                                                        color && (
                                                            color.map((item, index) => {
                                                                return <option value={item} key={index}> {item} </option>
                                                            })
                                                        )
                                                    }
                                                </select>
                                                <p className="childs d-flex align-items-center">
                                                    <button
                                                        onClick={() => dispatch(decrementQty({ id }))}> - </button>
                                                    <span id={`nb` + index}> {quantity} </span>
                                                    <button
                                                        onClick={() => dispatch(incrementQty({ id }))}> <FaPlus /> </button>
                                                </p>
                                            </div>
                                            <p className="div2_btn">
                                                <button onClick={() => saveItemCart(id)}>
                                                    <img src="/assets/svg/save.svg" alt="" />
                                                    Save
                                                </button>
                                                <button onClick={() => OpenPopupRemove(id)} >
                                                    <img src="/assets/svg/delete.svg" alt="" />
                                                    delete
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CartItem