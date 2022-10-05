import "./Portfolio.css";
import { useEffect, useState } from "react";
import richieImg from "../img/Mac/richies-min.png";
import medianstackImg from "../img/Mac/medianstack-min.png";
import floraFlowersImg from "../img/Mac/floraflowers-min.png";


function Portfolio() {

    const [index, setIndex] = useState(0);

    const mod = (n, m) => {
      let result = n % m;
  
      // Return a positive value
      return result >= 0 ? result : result + m;
    };
  
    // useEffect(() => {
    //   setTimeout(() => {
    //     setIndex((index + 1) % portfolio.length);
    //   }, 7000);
    // }, [index]);

    function rightClick() {
        setIndex((index + 1) % portfolio.length)

    }

    function leftClick() {
        setIndex((index - 1) % portfolio.length);
    }
    


    const portfolioStyle = {
        flexDirection: "row"
    }

    const portfolioStyleRev = {
        flexDirection: "row-reverse"
    }


    // animations //

    // const [portfolioDisplayRow, setPortfolioDisplayRow] = useState(
    //     {
    //         transform: 'translate(-2000px, 0)',
    //         flexDirection: "row"
    //     }
    // )
    
    // window.addEventListener('scroll', () => {
    //     const scrolled = window.scrollY;

    //     if(Math.ceil(scrolled > 800)) {
    //         setPortfolioDisplayRow({
    //             transform: 'translate(0, 0)',
    //             flexDirection: "row"
    //         })
    //     }

    // })

    // const [portfolioDisplayRev, setPortfolioDisplayRev] = useState(
    //     {
    //         transform: 'translate(2000px, 0)',
    //         flexDirection: "row-reverse"
    //     }
    // )
    
    // window.addEventListener('scroll', () => {
    //     const scrolled = window.scrollY;

    //     if(Math.ceil(scrolled > 800)) {
    //         setPortfolioDisplayRev({
    //             transform: 'translate(0, 0)',
    //             flexDirection: "row-reverse"
    //         })
    //     }

    // })

    // animations //


    const portfolio = [
        {
            portfolioNum: 1,
            portfolioName: "Richie's",
            portfolioImg: richieImg,
            portfolioLink: "http://ashot.geeklab.am/Richie/",
            portfolioDescription: "Richie's - first website.Created to practice my markup language skills and work easily with website layout.I've used right html structures and beautiful styles(designed by me),also worked with flexbox to use website responsively.",
            usedTechnologies: ["HTML5", "CSS3 | Responsive, Flexbox", "Git | Version Control"]
        },
        {
            portfolioNum: 2,
            portfolioName: "Medianstack",
            portfolioImg: medianstackImg,
            portfolioLink: "http://ashot.geeklab.am/Medianstack/",
            portfolioDescription: "Medianstack - A beautiful colorful Website.Created to work with Javascript and to make a beautiful Software Services website.I've worked with Javascript DOM, and practiced my knowledge to understand the bascis of Javascript.",
            usedTechnologies: ["HTML5", "CSS3 | Responsive, Flexbox", "Javascript | DOM", "Git | Version Control"]
        },
        {
            portfolioNum: 3,
            portfolioName: "Flora Flowers",
            portfolioImg: floraFlowersImg,
            portfolioLink: "https://rychiee.github.io/fionaflowers/",
            portfolioDescription: "FloraFlowers - The most functional website I've made.Created to practice my React js skills and to make more functional websites.I've mostly worked with data-structures, components, react-router-dom and understood the work style of React js, now I can easily work with React.",
            usedTechnologies: ["HTML5", "CSS3 | Responsive, Flexbox", "React.js | Hooks, Data Structures, Dynamic JSX", "Redux | State Management", "Git | Version Control"]
        }
    ]


    return(
        <section className="portfolioSection" id="portfolio">
            <div className="portfolioDiv">
                <h2>Portfolio</h2>
                <div className="portfolioContent">
                    {portfolio.map((eachWork) => (
                        <div className="eachPortfolio" style={eachWork.portfolioNum % 2 == 0 ? portfolioStyleRev : portfolioStyle} key={eachWork.portfolioNum}>
                            <div className="portfolioImgDiv">
                                <a href={eachWork.portfolioLink}><img src={eachWork.portfolioImg}/></a>
                            </div>
                            <div className="portfolioDescriptionParent">
                                <div className="portfolioDescriptionDiv">
                                    <div className="portfolioGeneralInfo">
                                        <h3>{eachWork.portfolioName}</h3>
                                        <p>{eachWork.portfolioDescription}</p>
                                    </div>
                                    <div className="portfolioContentInfo">
                                        <h5>Used Technologies for application creation:</h5>
                                        {eachWork.usedTechnologies.map((eachTechnologie) => (
                                            <li>{eachTechnologie}</li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mobilePortfolio">
                    <div className="carousel">
                        {portfolio.map((item, i) => {
                        const indexLeft = mod(index - 1, portfolio.length);
                        const indexRight = mod(index + 1, portfolio.length);

                        let className = "card";
                        let clickFunc;
                        let url;

                        if (i === index) {
                            className = "card card--active"
                            url = item.portfolioLink
                        } else if (i === indexRight) {
                            className = "card card--right"
                            clickFunc = rightClick
                            url = "#"
                        } else if (i === indexLeft) {
                            className = "card card--left"
                            clickFunc = leftClick
                            url = "#"
                        } else className = "card card--active"



                        return (
                            <div className={className} key={item.portfolioNum} onClick={clickFunc}>
                                    {i === index 
                                    ?
                                    <a href={item.portfolioLink}><img src={item.portfolioImg}/></a>
                                    :
                                    <img src={item.portfolioImg}/>
                                    }
                                <div>
                                    <h3>{item.portfolioName}</h3>
                                    <p>{item.portfolioDescription}</p>
                                </div>
                                <div className="mobPortfolioContentInfo">
                                    <h5>Used Technologies for application creation:</h5>
                                    {item.usedTechnologies.map((eachTechnologie, index) => (
                                        <li key={index}>{eachTechnologie}</li>
                                    ))}
                                </div>
                            </div>
                            
                        );
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio;
