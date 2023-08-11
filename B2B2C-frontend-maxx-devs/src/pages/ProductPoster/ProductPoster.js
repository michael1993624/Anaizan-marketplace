import { useState } from "react"
import { FaList, FaRegListAlt } from "react-icons/fa"
import { useSelector } from "react-redux"
import { ProductListCard } from "../../components/ProductListCard/ProductListCard"
import { SupplierCard } from "../../components/SupplierCard/SupplierCard"
import CardProd from "./CardProd/CardProd"

import "./ProductPoster.scss"

const ProductPoster = () => {

    const [list, setList] = useState(0)

    const supplierAr = useSelector((state) => state.myStore.supplierAr)
    const productList = useSelector((state) => state.myStore.productList)

    const active = {
        background: "white",
        color: "#FF7700"
    }

    const no_active = {
        background: "none",
        color: "white"
    }

    /* function show the list */
    const showList = () => {
        if (list == 0) {
            return (
                <div className="product-mosaique">
                    <CardProd listPorduct={productList} />
                </div>
            )
        } else if (list == 1) {
            return (
                <>
                    <SupplierCard listSupplier={supplierAr} />
                </>
            )
        } else if (list == 2) {
            return (
                <>
                    <ProductListCard listProduct={productList} />
                </>
            )
        }
    }

    return (
        <div className="product-poster">
            <div className="poster-head">
                <div className="div1" >
                    <div className="div-cont">
                        Brands
                        <div> <img src="/assets/png/m1.png" /> </div>
                        <div> <img src="/assets/png/m2.png" /> </div>
                        <div> <img src="/assets/png/m3.png" /> </div>
                        <div> <img src="/assets/png/m4.png" /> </div>
                        <div> <img src="/assets/png/m2.png" /> </div>
                        <div> <img src="/assets/png/m1.png" /> </div>
                    </div>
                    <div className="div1-child">
                        <p>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Diamond Member</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor=""> Gold Member </label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor=""> Audited supplier </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="div2 d-flex align-items-center justify-content-between">
                <div className="div2-child1">
                    <button onClick={() => setList(0)}
                        style={list == 0 || list == 2 ? active : no_active}> Product </button>
                    <button style={list == 1 ? active : no_active}
                        onClick={() => setList(1)}> Suppliers </button>
                </div>
                <div className="div2-child2">
                    {
                        list == 0 || list == 2 ? (
                            <>
                                <button onClick={() => setList(0)}>
                                    <FaRegListAlt />
                                </button>
                                <button onClick={() => setList(2)}>
                                    <FaList />
                                </button>
                            </>
                        ) : ""
                    }
                </div>
            </div>
            {showList()}
        </div>
    )
}

export default ProductPoster