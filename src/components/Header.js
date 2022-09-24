import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenu } from 'react-icons/hi';


import "./Header.css";

function Header() {

    const page = document.querySelector("html");;

    const [status, setStatus] = useState(false)
    const [secStatus, setSecStatus] = useState(false)

    const mobActive = {
        left: "0",
        transition: "0.5s"
    }

    const mobUnactive = {
        left: "-100%",
        transition: "0.5s"
    }

    const secMobActive = {
        transition: "0.5s"
    }

    const secMobUnactive = {
        transition: "0.5s"
    }

    const [animSecondHeader, setAnimSecondHeader] = useState({
        height: 0,
        top: -80
    })

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
    }, [])

    function scrollHandler() {
        if(window.scrollY) {
            setAnimSecondHeader({
                height: window.scrollY > 480 ? 80 : 0,
                top: window.scrollY > 480 ? 0 : -80
            })
        }
    }

    const styleSecond = {
        height: animSecondHeader.height + "px",
        top: animSecondHeader.top + "px"
    }

    status === true || secStatus === true ? page.style.overflow = "hidden" : page.style.overflow = "auto"


    return (
        <header>
            <div className="secHeader" style={styleSecond}>
                <div className="secHeaderDiv">
                    <ul>
                        <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="home">Home</Link></li>
                        <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="skills">Skills</Link></li>
                        <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="portfolio">Portfolio</Link></li>
                        <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="about">About</Link></li>
                        <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="contact">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="headerDiv">
                <ul>
                    <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="home">Home</Link></li>
                    <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="skills">Skills</Link></li>
                    <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="portfolio">Portfolio</Link></li>
                    <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="about">About</Link></li>
                    <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="contact">Contact</Link></li>
                </ul>
            </div>

            <div className="menuHeader">
                <div className="iconDiv">
                    <HiMenu className="menuIcon" onClick={() => {
                        setStatus(!status)
                    }}/>
                    <div className="mobileMenuActive" style={status ? mobActive : mobUnactive}>
                        <div className="mobileMenuDiv">
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="home" onClick={() => {
                                setStatus(!status)
                            }}>Home</Link></li>
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="skills" onClick={() => {
                                setStatus(!status)
                            }}>Skills</Link></li>
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="portfolio" onClick={() => {
                                setStatus(!status)
                            }}>Portfolio</Link></li>
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="about" onClick={() => {
                                setStatus(!status)
                            }}>About</Link></li>
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="contact" onClick={() => {
                                setStatus(!status)
                            }}>Contact</Link></li>
                        </div>
                    </div>
                </div>
            </div>

            <div className="secMenuHeader" style={styleSecond}>
                <div className="iconDiv">
                    <HiMenu className="menuIcon" onClick={() => {
                        setSecStatus(!secStatus)
                    }}/>
                    <div className="mobileMenuActive" style={secStatus ? mobActive : mobUnactive}>
                        <div className="mobileMenuDiv">
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="home" onClick={() => {
                                setSecStatus(!secStatus)
                            }}>Home</Link></li>
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="skills" onClick={() => {
                                setSecStatus(!secStatus)
                            }}>Skills</Link></li>
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="portfolio" onClick={() => {
                                setSecStatus(!secStatus)
                            }}>Portfolio</Link></li>
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="about" onClick={() => {
                                setSecStatus(!secStatus)
                            }}>About</Link></li>
                            <li><Link activeClass="active" duration={900} isDynamic={true} offset={-80} smooth ignoreCancelEvents to="contact" onClick={() => {
                                setSecStatus(!secStatus)
                            }}>Contact</Link></li>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;