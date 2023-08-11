import "./ButtonPagination.scss"


import { FaChevronLeft, 
    FaChevronRight } from "react-icons/fa"

const ButtonPagination = ({ }) => {

    return (
        <div className="pagi">
            <button> <FaChevronLeft /> </button>
            <button> 1 </button>
            <button> 2 </button>
            <button> 3 </button>
            ... &nbsp;
            <button> <FaChevronRight /> </button>
            <div>
                <label> Go to page </label>
                <input type="number" name="nb" id="nb" />
                <button> Go </button>
            </div>
        </div>
    )
}

export default ButtonPagination