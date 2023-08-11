import { FaSearch } from "react-icons/fa"
import { MdOutlineAddAPhoto } from "react-icons/md"

import "./Header.scss"

const options = [
    { value: "products", label: "Products" },
    { value: "suppliers", label: "Supplier" },
];

export const SearchBar = () => {
    return (
        <>
            <form className="top-search-bar">
                <select name="categorie">
                    <option disabled> Categories </option>
                    {options.map(({ value, label }, index) => {
                        return <option key={index} value={value}> {label} </option>
                    })}
                </select>
                <input type="search" name="" />
                <button className="btn-picture">
                    <input className="position-abs-center" type = "file" accept=".png,.jpg,.jpeg" />
                    <MdOutlineAddAPhoto className="position-abs-center" />
                </button>
                <button className="btn-search" type="submit"> Search </button>
                <button id="search-icon"> <FaSearch /> </button>
            </form>
        </>
    )
}