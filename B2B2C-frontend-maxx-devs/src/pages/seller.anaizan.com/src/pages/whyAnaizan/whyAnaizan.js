import React from "react"
import images from "../../assets/img"
import WhyAnaizanStyle from "./whyAnaizan.module.css"
import homePageMarket from "../../assets/img/marketp.png"
import catMarket from "../../assets/img/categorieSect.png"
import formInsMarket from "../../assets/img/formIns.png"
import LastSection from  "../../shared/LastSection/LastSection"
import DflexCard from "../../components/DflexCard/DflexCard"
import FirstSection from "../../shared/FirstSection/FirstSection"

const WhyAnaizan = () => {

    return (
        <>
            <FirstSection
                title={"Why Sell"}
                b={" On Anaizan"}
                sub={"Anaizan.com makes ecommerce possible for sellers around the world, connecting you with new customers and the tools necessary to do business on a global scale."}
                img={images.story_bg}
            />
            <section className={WhyAnaizanStyle.section2}>
                <DflexCard title= "Grow your"
                    span="business"
                    p="One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma,
                  Alibaba.com ecommerce platform has helped sellers reach buyers around the world for
                   more than 20 years, now with an end-to-end suite of tools built for B2B.`,
                    "
                   p2="One of the largest B2B wholesale marketplaces in the world.
                    Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has 
                    helped sellers reach buyers around the world for more than 20 years, 
                    now with an end-to-end suite of tools built for B2B.
                   "
                   p3="One of the largest B2B wholesale marketplaces in the world.
                    Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped 
                    sellers reach buyers around the world for more than 20 years, 
                    now with an end-to-end suite of tools built for B2B.
                   "
                    img={homePageMarket} />
            </section>

            <section className={WhyAnaizanStyle.section3}>
            <DflexCard title= "Reach millions of business"
                    span="buyers globally"
                    p="One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma,
                  Alibaba.com ecommerce platform has helped sellers reach buyers around the world for
                   more than 20 years, now with an end-to-end suite of tools built for B2B.`,
                    "
                   p2="One of the largest B2B wholesale marketplaces in the world.
                    Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has 
                    helped sellers reach buyers around the world for more than 20 years, 
                    now with an end-to-end suite of tools built for B2B.
                   "
                   p3={null}
                    img={catMarket} />
            </section>

            <section className={WhyAnaizanStyle.section4}>
            <DflexCard title= "Get discovered and increase sales with"
                    span="intelligent tools"
                    p="One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma,
                  Alibaba.com ecommerce platform has helped sellers reach buyers around the world for
                   more than 20 years, now with an end-to-end suite of tools built for B2B.`,
                    "
                   p2={null}
                   p3={null}
                    img={formInsMarket} />
            </section>
            <LastSection /> 
        </>
    )
}

export default WhyAnaizan