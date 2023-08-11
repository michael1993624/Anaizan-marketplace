import "../Product.scss"

import { FaCheckSquare } from "react-icons/fa";


const ProductItems = ({ listProduct }) => {
    return (
        listProduct.map(list => {
            return (
                <div className="prod">
                    <a href="/"> <img src={list.img} /> </a>
                    
                    <p>
                        High Quality A AMI LEVEL 3 blue green Disposable steri...
                    </p>
                    <b> CFA 108 - CFA 324 </b>
                    <h3> $ 7,50 - $ 7,50 </h3>
                    <p>
                        <span> 10 pieces </span>
                        <span> <FaCheckSquare /> verified </span>
                    </p>
                </div>
            )
        })
    )
}

export default ProductItems