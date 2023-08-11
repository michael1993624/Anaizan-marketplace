import React, { Suspense } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../loader/loader";

const LayoutSeller = ({ children }) => {
    return (
        <>
            <Header />
            <div className="content-children">
                <Suspense fallback={<Loader />}>
                    {children}
                </Suspense>
            </div>
            <Footer />
        </>
    )
}

export default LayoutSeller