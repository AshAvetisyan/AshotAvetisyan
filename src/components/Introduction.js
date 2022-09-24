import { Link } from "react-scroll";
import "./Introduction.css";
import introImg from "../img/heyo.png";
import { ImLocation } from "react-icons/im";
import { MdDone } from "react-icons/md";
import ResumeButton from "./resumeButton";

function Introduction() {
    return (
        <section className="introductionSection" id="home">
            <div className="introductionContent">
                <div className="introContent1">
                    <img src={introImg} />
                </div>

                <div className="introContent2">
                    <div className="introContentText">
                    <h1>Hi, I'm Ashot Avetisyan</h1>
                    <p>Software Engineer | Front-End Developer</p>
                    <span><ImLocation className="locationIcon"/> Los Angeles, CA</span>
                    <span><MdDone className="doneIcon"/> U.S. Work Authorization</span>
                    <span><MdDone className="doneIcon"/> Ready to relocate</span>
                    <span><MdDone className="doneIcon"/> Ready to work</span>
                    <div className="introButtons">
                        <Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="about"><button className="btnLearnMore">More</button></Link>
                        <ResumeButton />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;