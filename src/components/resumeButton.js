import { Link } from "react-router-dom";

function ResumeButton() {
    return(
        <Link to="/Resume" target="_blank"><button className="btnResume">Download CV</button></Link>
    )
}

export default ResumeButton;