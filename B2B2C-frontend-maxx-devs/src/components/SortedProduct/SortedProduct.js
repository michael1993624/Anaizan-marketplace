import "./SortedProduct.scss"

export const componentSort = () => {
    return (
        <div className="sort d-flex align-items-center">
            <label> Sort By :</label>
            <p className="d-flex align-items-center">
                <span> Currency </span>
                <select name="" id="">
                    <option> US dollar </option>
                </select>
            </p>

            <p className="d-flex align-items-center">
                <span> Ship&nbsp;to </span>
                <select name="" id="">
                    <option> United states of america </option>
                </select>
            </p>
        </div>
    )
}