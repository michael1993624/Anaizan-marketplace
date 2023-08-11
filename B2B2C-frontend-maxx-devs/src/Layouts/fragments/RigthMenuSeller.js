import { AiOutlineUser } from "react-icons/ai"

export const RightMenuSeller = () => {
    return (
        <div className="group1 hide">
        <li>
          <a href="/">
            <img src="/assets/svg/order.svg" />
            Order
          </a>
        </li>

        <li>
          <a href="/">
            <AiOutlineUser />
            Sign In
          </a>
        </li>
        <select name="lang" id="">
          <option selected disabled> Select </option>
          <option value="Englidh"> English </option>
          <option value="French"> French </option>
        </select>
      </div>
    )
}
