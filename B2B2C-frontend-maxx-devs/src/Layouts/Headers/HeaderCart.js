import React from "react"
import { HeadCartBar } from "../fragments/headCartBar"
import { HeaderContent } from "../fragments/HeaderContent"


export const HeaderCart = () => {
    return (
        <>
            <HeaderContent fragement1={<HeadCartBar />}
            fragement2={null}
            fragement3={null}
            fragement4={null} />
        </>
    )
}