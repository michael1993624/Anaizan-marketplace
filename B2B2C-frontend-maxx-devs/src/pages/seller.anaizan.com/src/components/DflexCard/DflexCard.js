import DflexCardStyle from "./DflexCard.module.css"
import WhyAnaizanStyle from "../../pages/whyAnaizan/whyAnaizan.module.css"

export default function DflexCard ({title, span, p, p2, p3, img}) {
    return (
        <div className={DflexCardStyle.contain + " " + WhyAnaizanStyle.contain}>
            <div>
                <h2 className="title-h2">
                    {title}
                    <span> {span} </span>
                </h2>
                <p> {p} </p>
                <p> {p2} </p>
                <p> {p3} </p>
            </div>
            <div>
                <img src={img} />
            </div>
        </div>
    )
}