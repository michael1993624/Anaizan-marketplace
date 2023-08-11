import "./FormSupplier.scss"

const FormSupplier = ({ }) => {
    return (
        <div className="content_msg">
            <div className="block_msg" id="block_msg">
                <h4> Send a Message to the Supplier </h4>
                <p>
                    Get to make enquiries on details such as product name, colour, size,
                    quantity, material direct from the supplier
                </p>
                <form className="form">
                    <p> To: Sanny Von </p>
                    <div>
                        <label> Message </label>
                        <textarea name="msg"
                            id="msg"
                            cols="30"
                            rows="7"></textarea>
                        <span id="msg_err "></span>
                    </div>
                    <div className="div2_form">
                        <label>Quantity :</label>
                        <input type="text" name="" placeholder="" />
                        <select>
                            <option disabled> Select Piece </option>
                            <option value=""></option>
                        </select>
                    </div>
                    <p className="check">
                        <input type="checkbox" name="" />
                        <span>
                            Recommended For matchign supplier if this supplier
                        </span>
                    </p>
                    <button type="submit"> Submit </button>
                </form>
            </div>
        </div>
    )
}

export default FormSupplier