import "./OnlinePersonnalisation.scss"
import "react-multi-carousel/lib/styles.css";
import ADpage from "../../Home/ADPage/ADpage";

const OnlinePersonnalisation = ({ label, listProduit }) => {

    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
    };

    return (
        <>
            <div className="head" id="head">
                <img src="/assets/svg/vector4.svg" alt="" />
                <h3> Online personalization center </h3>
            </div>
            <div className="bodys" id = "bodys">
                <ADpage whichCarousel={5} ADText={null} listProduit={listProduit} />
            </div>
        </>
    )
}

export default OnlinePersonnalisation