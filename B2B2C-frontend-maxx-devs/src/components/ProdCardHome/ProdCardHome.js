import "./ProdCardHome.scss"
import { RiArrowRightSLine } from "react-icons/ri"

const ProdCardHome = ({ label, listProd }) => {

    return (
        <>
            <section className="section7">
                <div className="sect2_b1">
                    <h3 className="mb-0"> {label} </h3>
                    <a href="/">
                        <span> See&nbsp;All <RiArrowRightSLine /> </span>
                    </a>
                </div>
                <div className="prods-card" id="deplie">
                    {listProd.map((list, index) => {
                        return (
                            <div className="prod-card-bloc" key={index}>
                                <div>
                                    <img src={list.img} alt="" />
                                </div>
                                <div>
                                    <h4>
                                        {list.desc}
                                    </h4>
                                    <p>
                                        {list.infos}
                                    </p>
                                    <h5> {list.year} YRS</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default ProdCardHome;