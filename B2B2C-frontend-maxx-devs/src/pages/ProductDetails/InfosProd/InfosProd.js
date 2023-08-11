import { FaStar } from "react-icons/fa"
import { useLocation } from "react-router-dom"

const InfoProd = () => {

    const location = useLocation();
    const data = location.state?.data;
    const sizes = data.size
    const colors = data.color

    return (
        <div className="div-info-prod">
            <h3>
                {data.title}
            </h3>
            <div className="star">
                {new Array(5).fill().map((list, index) => {
                    return <span key={index}> <FaStar /> </span>
                })}
                <span> 5965 Reviews </span>
            </div>
            <p> 328 Transactions </p>
            <h4>
                <b> CFA 1,890 - CFA 3,671/piece </b>
                <span> 2 Piece/Pieces(Min_ Order) </span>
            </h4>
            <p className="span">
                Size&nbsp;:
                {sizes.map((size, index) => {
                    return <button key={index}> {size}</button>
                })}
            </p>
            <p className="span">
                Color&nbsp;:
                {colors.map((color, index) => {
                    return <button key={index} style={{ background: color }}></button>
                })}
            </p>
            <div className="spanss">
                Samples:
                <div>
                    <b> CFA 1,890 - CFA 3,671/piece </b>
                    <span>  <br /> 2 Piece/Pieces(Min_ Order) </span>
                </div>
            </div>
            <h5> Delivery Time: </h5>
            <table>
                <tbody>
                    <tr>
                        <td> Quantities (Pieces) </td>
                        <td> 1 - 50 </td>
                        <td> 50 - 300 </td>
                        <td> 300 - 1000 </td>
                        <td>  1000 </td>
                    </tr>
                    <tr>
                        <td> Est. Time (Days) </td>
                        <td> 7 </td>
                        <td> 7 </td>
                        <td> 7 </td>
                        <td> To be negociated </td>
                    </tr>
                </tbody>
            </table>
            <div className="spanss" id="spanss">
                Customisation:
                <div>
                    <b> Customized logo  <span> (Mirm Order: 20 Pieces) </span> </b> <br />
                    <b> Customized packaging  <span> (Min_ Order: 100 Pieces) </span> </b>
                </div>
            </div>
            <div className="foot_infos">
                <p>
                    Shipping : <span> Support Express Sea treight Land freight Air treight </span>
                </p>
                <p> <b> Trade assurance </b> Trade Assurance protects your Anaizan.com orders </p>
                <p> <b> Trade assurance </b> Trade Assurance protects your Anaizan.com orders </p>
                <p>
                    Paiement : <span> VISA T/ T apay WesternUnion WU </span>
                </p>
            </div>
        </div>
    )
}

export default InfoProd