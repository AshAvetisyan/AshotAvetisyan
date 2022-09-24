import resume from "../img/aavetisyanresume.pdf";

function ResumePage() {

    const resumeStyle = {
        width: "100%",
        height: "100vh"
    }
    return (
        <embed
            src={resume}
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
            style={resumeStyle}></embed>
    )
}

export default ResumePage;