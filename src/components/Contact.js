import "./Contact.css";
import mailIcon from "../img/icons/contactMailIcon.png"
import teleIcon from "../img/icons/contactTpIcon.png"
import instaIcon from "../img/icons/contactInstaIcon.png"
import faceIcon from "../img/icons/contactFbIcon.png"

function Contact() {
    return (
        <section className="contactSection" id="contact">
            <div className="contactContentDiv">
                <h2>Contact me</h2>
                <div className="contactContent">
                    <div>
                        <img src={mailIcon} />
                        <a href="mailto: 2004ashota@gmail.com">2004ashota@gmail.com</a>
                    </div>
                    <div>
                        <img src={teleIcon} />
                        <a href="tel: +17479660333">+1 (747) 966-0333</a>
                    </div>
                    <div>
                        <img src={instaIcon} />
                        <a href="https://www.instagram.com/asharmeni/">asharmeni</a>
                    </div>
                    <div>
                        <img src={faceIcon} />
                        <a href="https://www.facebook.com/ashot.avetisyan.5249">Ashot Avetisyan</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;