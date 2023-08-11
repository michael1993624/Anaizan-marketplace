import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import "./CardSuppliers.scss"

const CardSuppliers = ({ listSuppliers, listBuyer }) => {
    
    const [tab, setTab] = useState (0)
    const [list, setList] = useState ([]);
    
    const showPerson = (index) => {
        setTab(index)

        if (index == 0) {
            setList([...listSuppliers])
        } else {
            setList([...listBuyer])
        }
    }

    useEffect (() => {
        setList([...listSuppliers])
    },[])

    return (
        <section className="sectionb7">
            <div className="sect7_head">
                <button 
                className={tab == 0 ? "active":"no-active"}
                onClick = {() => showPerson(0)}>
                    Buyer Services
                </button>
                <button 
                className={tab == 1 ? "active":"no-active"}
                onClick = {() => showPerson(1)}>
                    Sell On Anaizan
                </button>

                <div></div>
            </div>
            <div className="sect7_div1">
                {
                    list.map((list, index) => {
                        return (
                            <div className="blocs" key={index}>
                                <div className="bb" style={{
                                    backgroundImage: list.img,
                                    backgroundSize: "100%", backgroundRepeat: "no-repeat"
                                }}>
                                    <div>
                                        <p>
                                            {list.text}
                                        </p>
                                        <span> Learn More <FaArrowRight /> </span>
                                    </div>
                                </div>
                                <div className="foots">
                                    <h3>
                                        <img src={"/assets/svg/" + list.logo} alt="" />
                                        {list.activity}
                                    </h3>
                                    <p>
                                        {list.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default CardSuppliers