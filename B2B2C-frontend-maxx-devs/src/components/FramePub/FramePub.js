import "./FramePub.scss"

const FrameTypeProduct = ({icon, label, backColor, backColor2 }) => {
    return (
        <>
            <div style={{background: backColor}} className="cards">
                <div style={{background: backColor2}} className="card-child">
                    <img src= {`/assets/svg/`+icon} alt="" />
                </div>
                {label}
            </div>
        </>
    )
}

export default FrameTypeProduct