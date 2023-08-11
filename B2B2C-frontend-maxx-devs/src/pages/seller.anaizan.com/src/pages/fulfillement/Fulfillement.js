import React from "react"
import images from "../../assets/img"
import LastSection from  "../../shared/LastSection/LastSection"

import FulfillementStyle from "./Fulfillement.module.css"
import FirstSection from "../../shared/FirstSection/FirstSection"

const Fulfillment = () => {
    return (
        <>
            <FirstSection
                title={"Fulfillement"}
                b={"Anaizan"}
                sub={"Anaizan.com makes ecommerce possible for sellers around the world, connecting you with new customers and the tools necessary to do business on a global scale."}
                img={images.story_bg}
            />
                <section className={FulfillementStyle.section}>
                <div className={`${FulfillementStyle.div1} ${FulfillementStyle.divs}`}>
                    <h4> FAQ </h4>
                    <h2 className="title-h2">
                        What is Fulfillment by <span> Anaizan </span> (FBA)?
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

                <div className={`${FulfillementStyle.div1} ${FulfillementStyle.divs}`}>
                    <h2 className="title-h2">
                        Get started with <span> FBA </span>
                    </h2>
                    <p>
                        Fulfillment by Amazon can help eliminate your fulfillment headaches and help you scale your business.
                    </p>
                    <div className={FulfillementStyle.div_child}>
                        <h4>
                            Step 1
                        </h4>
                        <div>
                            <h5> Setup FBA </h5>
                            <p>
                                One of the largest B2B wholesale marketplaces in the world.
                                Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${FulfillementStyle.div1} ${FulfillementStyle.divs}`}>
                    <h2 className="title-h2">
                        Your products are eligible for  <span> Anaizan Prime. </span> (FBA)?
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

                <div className={`${FulfillementStyle.div1} ${FulfillementStyle.divs}`}>
                    <h2 className="title-h2">
                        Customers get Amazon's trusted <span> customer service</span> .
                    </h2>
                    <p>
                        <b> FBA Customers service: </b> One of the largest B2B wholesale marketplaces in the world.
                        Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                    </p>
                    <p>
                        <b> FBA returns</b>One of the largest B2B wholesale marketplaces in the world.
                        Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                    </p>
                </div>

                <div className={`${FulfillementStyle.div1} ${FulfillementStyle.divs}`}>
                    <h2 className="title-h2">
                    It's  <span> cost-effective </span> .
                    </h2>
                    <p>
                        <b> FBA Customers service: </b> One of the largest B2B wholesale marketplaces in the world.
                        Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                    </p>
                    <p>
                        <b> FBA returns</b>One of the largest B2B wholesale marketplaces in the world.
                        Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                    </p>
                </div>
            </section>
            <LastSection /> 
        </>
    )
}

export default Fulfillment