import React from "react"
import LastSection from  "../../shared/LastSection/LastSection"
import desktop from "../../assets/img/desktops.png"
import iphone from "../../assets/img/iphone.png"
import image from "../../assets/img/images.png"
import imgLeft from "../../assets/img/rect.png"
import onlineImg from "../../assets/img/onlineImg.png"

import OnlineStoreStyle from "./onlineStore.module.css"
import FulfillementStyle from "../fulfillement/Fulfillement.module.css"
import FirstSection from "../../shared/FirstSection/FirstSection"

const OnlineStore = () => {

    return (
        <>
            <FirstSection 
                title={"Build an"}
                b={"online store"}
                span={" featuring your brand"}
                sub={"Access hundreds of millions of customers around the world with Amazon Global Selling."}
                img={onlineImg}
            />
            <section className={OnlineStoreStyle.section2}>
                <div className={`${FulfillementStyle.div1} ${FulfillementStyle.divs}`}>
                    <h4> FAQ </h4>
                    <h2 className="title-h2">
                        Why build an  <span> online store? </span>
                    </h2>
                    <p>
                        One of the largest B2B wholesale marketplaces in the world.
                        Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                    </p>
                    <p>
                        One of the largest B2B wholesale marketplaces in the world.
                        Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                    </p>
                </div>
                <div className={OnlineStoreStyle.div2}>
                    <img src={desktop} />
                    <div> <img src={iphone} /> </div>
                </div>
                <div className={OnlineStoreStyle.text}>
                    <p>
                        One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years,
                        now with an end-to-end suite of tools built for B2B.
                    </p>
                </div>
                <section className={OnlineStoreStyle.div3}>
                        <img src={image} />
                    <div className={`${FulfillementStyle.div1} ${FulfillementStyle.divs} ${OnlineStoreStyle.divs}`}>
                        <h3>
                            You’ve built your online <span> store on Anaizan </span>. Now what?
                        </h3>
                        <p>
                            One of the largest B2B wholesale marketplaces in the world.
                            Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                        </p>
                    </div>
                </section>

                <div className={OnlineStoreStyle.div4}>
                    <img src={imgLeft} />
                    <div>
                        <h2 className="title-h2"> Start <span> Selling </span> </h2>
                        <button> Start Selling </button>
                    </div>
                </div>
            </section>
            <LastSection /> 
        </>
    )
}

export default OnlineStore