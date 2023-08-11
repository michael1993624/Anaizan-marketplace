import { FaChevronDown } from "react-icons/fa"

export const LeftMenuSeller = () => {
    return (
        <div className="group2 hide">
            <li>
              <a href=""> Sourcing Solution </a>
              <FaChevronDown />
            </li>
            <li>
              <a href=""> Featured Partners </a>
              <FaChevronDown />
            </li>
            <li>
              <a href="" > Help </a>
              <FaChevronDown />
            </li>
          </div>
    )
}