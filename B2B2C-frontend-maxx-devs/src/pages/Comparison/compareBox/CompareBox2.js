import "../Comparison.scss";

const CompareBox2 = ({ listProduct }) => {
    return (
        listProduct.map((list, index) => {
            return (
                <div className="card-prod-mb" key={index}>
                    <div className="div-card-child">
                        <div className="img">
                            <div>
                                <img src={list.img} alt="" />
                            </div>
                            <h4>
                                Ready To Ship
                                High Quality 3...
                            </h4>
                        </div>
                        <div className="info">
                            <h4> Company  Name </h4>
                            <p> {list.companyName} </p>
                            <h4> Business Type </h4>
                            <p> {list.businessType} </p>
                            <h4> Supplier Location </h4>
                            <p> <img src={list.flagsCountry} /> {list.CountryName} </p>
                            <h4> Main Products </h4>
                            <p> {list.mainProduct} </p>
                            <h4> Total Annual Sale Volume </h4>
                            <p> {list.totalAnnuel} </p>
                        </div>
                    </div>

                </div >
            )
        })

    )
}

export default CompareBox2