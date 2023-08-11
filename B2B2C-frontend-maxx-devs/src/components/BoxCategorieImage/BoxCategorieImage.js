import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./BoxCategorieImage.scss";

const BoxCategorieImage = ({ label, listCategorieImage, link }) => {

    return (
        <>
            <div className="headBox d-flex align-items-center justify-content-between">
                <h3> {label} </h3>
                <a href={link} className="d-flex align-items-center justify-content-between">
                    <span> See all </span>
                    <FaChevronRight />
                </a>
            </div>
            <div className="scroll-div">
                <div className="sect2_b2">
                    {
                        listCategorieImage.map((list, index) => {
                            return (
                                <div className="prod-card-categorie" key={index}>
                                    <div className="product d-flex align-items-center justify-content-center">
                                        <div>
                                            <Link to={`/sub-categories/${list.nameCategorie}`} state={{data:list.nameCategorie}}>
                                                <img src={`/assets/` + list.img} />
                                            </Link>
                                        </div>
                                    </div>
                                    <h4> {list.nameCategorie} </h4>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default BoxCategorieImage