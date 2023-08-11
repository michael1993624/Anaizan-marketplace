import B from "./BoxCategorieImage.module.css"
import BoxCategorieImage from "./BoxCategorieImage"

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const BoxCategorieImage2 = ({ listCategorieImage, typeProduct, icon }) => {

    return (
        <div className={B.block_slide}>
            <div className={B.sect2_b1}>
                <h3>
                    <img src={`/images/svg/` + icon} alt="" />
                    {typeProduct}
                </h3>
                <span id="seeAll1"> See All <RiArrowRightSLine /> </span>
            </div>
            <Carousel className={B.carousel_s1}
                showStatus={false} showThumbs={false}
                showIndicators={false} autoPlay={true}
                infiniteLoop={true} interval={60000}
                autoFocus={true}>
                <div className={B.sect2_b2} id = {B.sect2_b22}>
                    {
                        listCategorieImage.map(list => {
                            return (
                                <div className={B.bloc_prod}>
                                    <div className={B.product}>
                                        <div>
                                            <a href={`/sub-categorie?` + list.title}>
                                                <img src={`/images/` + list.img} />
                                            </a>
                                        </div>
                                    </div>
                                    <h4> {list.nameCategorie} </h4>
                                </div>
                            )
                        })
                    }
                </div>
            </Carousel>
        </div>
    )
}

export default BoxCategorieImage2