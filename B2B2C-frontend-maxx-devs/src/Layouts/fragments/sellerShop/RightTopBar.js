import OrderIcon from "../../../assets/svg/orders.svg";
import UserIcon from "../../../assets/svg/User.svg";
import { Link } from "react-router-dom";
import { PopupAccount } from "../../Popup/Popup";
import { LOGIN } from "../../../settings/constants";

export const RightTopBar = () => {

  return (
    <div className="menu-button-list hide2">
      <div className="text-center div">
        <Link to={LOGIN}>
          <img src={UserIcon} alt="user icon" />
          <p className="m-0"> Sign In</p>
        </Link>
        <div className="popup">
          <PopupAccount />
        </div>
      </div>
      <div className="text-center div order-hide" id="order-hide">
        <img src={OrderIcon} alt="order icon" />
        <p className="m-0">Orders</p>
      </div>
      <div className="div d-flex align-items-end">
        <select name="" id="">
            <option value=""> English </option>
        </select>
      </div>
    </div>
  )
}