import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">

        <div className="left-r">
            <img src={image1} alt="gym" />
            <img src={image2} alt="gym" />
            <img src={image3} alt="gym" />
            <img src={image4} alt="gym" />
        </div>

        <div className="right-r">

            <span>
                some reasons
            </span>
            <div>
                <span className="stroke-text">why</span>
                <span> choose us?</span>
            </div>
            <div className="details-r">
                <div>
                    <img src={tick} alt="tick" />
                    <span>Over 140+ expert coachs</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>Train smarter and faster than before</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>1 free program for new member</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>Reliable partners</span>
                </div>
            </div>
            <span style={{
                color: "var(--grey)",
                fontWeight: "normal",
                }}
            >Our partners
            </span>
            <div className="partners">
                <img src={nb} alt="logo nb" />
                <img src={adidas} alt="logo adidas" />
                <img src={nike} alt="logo nike" />
            </div>


        </div>

    </div>
  )
}

export default Reasons