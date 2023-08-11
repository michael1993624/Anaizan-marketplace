import React from "react";

import "./Product.scss"

import {
    FaAngleDoubleLeft, 
    FaAngleDoubleRight,
    FaList,
    FaRegListAlt
} from "react-icons/fa";
import ProductItems from "./ProductItem/ProductItem";
import ProductPoster from "../ProductPoster/ProductPoster";

const ProductPage = () => {

    const products = [
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
        { img: "/assets/product/prods.png", desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." }
    ]

    return (
        <div className="body_home">
            <ProductPoster listPorduct={products} />
        </div >
    )
}

export default ProductPage