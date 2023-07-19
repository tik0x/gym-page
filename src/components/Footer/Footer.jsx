import "./Footer.css"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"

const Footer = () => {

  return (
    <div className="footer-container">

        <hr />
        <div className="footer">
            <div className="social-links">
                <a href="https://github.com/tik0x" target="_blank"><img href src={Github} alt="github logo" /></a>
                <a href="https://www.instagram.com/joelmilotich/" target="_blank"><img src={Instagram} alt="instagram logo" /></a>
                <a href="https://www.linkedin.com/in/joel-milotich-660554202/" target="_blank"><img src={Linkedin} alt="linkedin logo" /></a>
                
                
            </div>

            <div className="logo-f">
              <a href="#"><img src={Logo} alt="fitclub logo" /></a>
            </div>
        </div>

        <div className="blur footer-blur-1"></div>

        <div className="blur footer-blur-2"></div>

    </div>
  )
}

export default Footer