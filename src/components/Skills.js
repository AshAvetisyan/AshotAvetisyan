import "./Skills.css"

function Skills() {

    const skills = [
        {
            skillNum: 1,
            skillName: "HTML",
            skillPower: {
                width: "100%"
            }
        },
        {
            skillNum: 2,
            skillName: "CSS / SCSS",
            skillPower: {
                width: "100%"
            }
        },
        {
            skillNum: 3,
            skillName: "JavaScript / jQuery",
            skillPower: {
                width: "90%"
            }
        },
        {
            skillNum: 4,
            skillName: "React / Redux",
            skillPower: {
                width: "90%"
            }
        },
        {
            skillNum: 5,
            skillName: "Responsive Website",
            skillPower: {
                width: "100%"
            }
        },
        {
            skillNum: 6,
            skillName: "Git | Version Control",
            skillPower: {
                width: "90%"
            }
        }        
    ]
    

    return(
        <section className="skillsSection" id="skills">
            <div className="skillsDiv">
                <h2>Skills</h2>
                <div className="skillContent">
                    {skills.map((eachSkill) => (
                        <div className="eachSkill" key={eachSkill.skillNum}>
                            <label>{eachSkill.skillName}</label>
                            <div className="progressMax">
                                <div className="progressValue" style={eachSkill.skillPower}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
