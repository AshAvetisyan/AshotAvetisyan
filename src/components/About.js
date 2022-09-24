import "./About.css";
import aboutPic from "../img/ash.png";
import { ImLocation } from "react-icons/im";

function About() {

    const workData = [
        {
            num: 1,
            name: "CSRNS, inc.",
            profession: "Front-End Developer | Remote",
            description: "I've worked at CSRNS, Inc. as a Remote Front-End Developer. Built dynamic Web Pages and Worked with Responsive Design, Web Animations and functional React Pages.",
            location: "Sunland, CA",
            descriptionList: [],
            startDate: {
                startMonth: "May",
                startYear: "2021"
            },
            endDate: {
                endMonth: "June",
                endYear: "2022"
            }
        },
        {
            num: 2,
            name: "Milky Way Child Care & Preschool",
            profession: "Social Media Manager | Remote",
            description: "I've worked at Milky Way Child Care as a Remote Social Media Manager. Built Beautiful Instagram, Facebook content posts designed by me.",
            location: "Glendale, CA",
            descriptionList: [],
            startDate: {
                startMonth: "June",
                startYear: "2021"
            },
            endDate: {
                endMonth: "Present",
                endYear: "2022"
            }
        }
    ]

    const educationData = [
        {
            num: 1,
            name: "TUMO Center for Creative Technologies",
            description: "",
            location: "Yerevan, Armenia",
            certificate: "Portfolio",
            skills: ["Web Development", "Graphic Design"],
            startDate: {
                startMonth: "October",
                startYear: "2017"
            },
            endDate: {
                endMonth: "October",
                endYear: "2020"
            }
        },
        {
            num: 2,
            name: "GeekLab",
            description: "",
            location: "Yerevan, Armenia",
            certificate: "Portfolio",
            skills: ["Front-End Developent"],
            startDate: {
                startMonth: "January",
                startYear: "2022"
            },
            endDate: {
                endMonth: "October",
                endYear: "2022"
            }
        }
    ]


    return(
        <section className="aboutSection" id="about">
            <div className="aboutHeader">
                <div className="aboutHeaderContent">
                    <span>About Me</span>
                    <img src={aboutPic} />
                    <span>About Me</span>
                </div>
            </div>
            <div className="aboutContentDiv">

                <div className="workExperienceDiv">
                    <h1>Work Experience</h1>
                    {workData.map((eachWork, index) => (
                        <div className="eachWorkHistory" key={index}>
                            <div className="part1">
                                <h2>{eachWork.name}</h2>
                                <h5>{eachWork.profession}</h5>
                                <span><ImLocation className="locationIcon" /> {eachWork.location}</span>
                                {eachWork.descriptionList.map((eachExperience, index) => (
                                    <li key={index}>{eachExperience}</li>
                                ))}
                                <p>{eachWork.description}</p>
                            </div>
                            <div className="part2">
                                <p>{eachWork.startDate.startYear}</p>
                                <h1>{eachWork.startDate.startMonth}</h1>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="educationHistoryDiv">
                    <h1>Education</h1>
                    {educationData.map((eachInfo, index) => (
                        <div className="eachEducationHistory" key={index}>
                            <div className="part1">
                                <h2>{eachInfo.name}</h2>
                                <h5>{eachInfo.certificate}</h5>
                                <span><ImLocation className="locationIcon" /> {eachInfo.location}</span>
                                {eachInfo.skills.map((eachSkill, index) => (
                                    <li key={index}>{eachSkill}</li>
                                ))}
                            </div>
                            <div className="part2">
                                <p>{eachInfo.startDate.startYear}</p>
                                <h1>{eachInfo.startDate.startMonth}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;