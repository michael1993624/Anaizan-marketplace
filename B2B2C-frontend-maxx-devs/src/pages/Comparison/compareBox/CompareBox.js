import "../Comparison.scss"


const CompareBox = ({ listProductInfos, compareText, compareText2 }) => {
    return (
        listProductInfos.map((list, index) => {
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
                            <h4> {compareText} </h4>
                            <p> {list.nbPiece} Pieces </p>
                            <h5> {compareText2} </h5>
                            <p> {list.price} </p>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default CompareBox