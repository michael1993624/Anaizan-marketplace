import React from "react"
import { FaChevronDown } from "react-icons/fa"


export const LeftNavMenu = () => {
    return (
        <ul className="group2">
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
          </ul>
    )
}