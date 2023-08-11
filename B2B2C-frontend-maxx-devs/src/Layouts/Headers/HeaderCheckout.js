import React from "react"
import { HeadCheckoutBar } from "../fragments/HeadCheckoutBar"
import { HeaderContent } from "../fragments/HeaderContent"


export const HeaderCheckout = () => {
    return (
        <>
            <HeaderContent fragement1={<HeadCheckoutBar />}
            fragement2={null}
            fragement3={null}
            fragement4={null} />
        </>
    )
}