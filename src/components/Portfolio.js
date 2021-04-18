import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// REACT POPUPBOX
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import object from "../images/object.png";
import portfolio from "../images/portfolio.png";
import socket from "../images/socket.png";
import travel from "../images/travel.png";


const Portfolio = () => {
    //SocketIO
    const openPopupboxSocketIO = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={socket} alt="Live Chat Bubbles Project..." />
                <p>I developed real-time chat-bubble application using with NodeJS , AngularJS, ExpressJS. and Socket.IO</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://socketio-live-chat-bubbles.herokuapp.com/", "_blank")}>https://socketio-live-chat-bubbles.herokuapp.com/</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/altanyesilkurt/socketio-live-chat-bubbles", "_blank")}>https://github.com/altanyesilkurt/socketio-live-chat-bubbles</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Live Chat Bubbles.",
                },
            },
        });
    }

    const popupboxConfigSocketIO = {
        titleBar: {
            enable: true,
            text: "Live Chat Bubbles."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // City Guide App
    const openPopupboxTravel = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={travel} alt="Travel Website Project..." />
                <p>I developed responsive, user-friendly travel website UI using with ReactJS, Bootstrap, Html5 and Css3.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://legend-travel.netlify.app/", "_blank")}>https://legend-travel.netlify.app/</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/altanyesilkurt/TravelWebsite", "_blank")}>https://github.com/altanyesilkurt/TravelWebsite</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Travel Website Project.",
                },
            },
        });
    }

    const popupboxConfigTravelWebsite = {
        titleBar: {
            enable: true,
            text: "Travel Website Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Portfolio Project
    const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
                <p>I developed my portfolio webpage using ReactJS, Material UI ,Html5 and Css3.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://altanyesilkurt.netlify.app/", "_blank")}>https://altanyesilkurt.netlify.app/</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/altanyesilkurt/portfolio", "_blank")}>https://github.com/altanyesilkurt/portfolio</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Portfolio React and Material UI project.",
                },
            },
        });

    }

    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "Portfolio React and Material UI project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Task Manager React and Redux Project
    const openPopupboxObjectRecognition = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={object} alt="Task Manager React and Redux Project..." />
                <p>In this project, it is aimed to recognize the objects around the driving car and develop a warning mechanism against the objects that suddenly appear in front of the car.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=YazVo0NNg_k", "_blank")}>https://www.youtube.com/watch?v=YazVo0NNg_k</a>
                <br />
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Multiple Object Recognition on Videos Using Deep Learning Methods.",
                },
            },
        });
    }

    const popupboxConfigObjectRecognition = {
        titleBar: {
            enable: true,
            text: "Multiple Object Recognition on Videos Using Deep Learning Methods."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxSocketIO}>
                        <img className="portfolio-image" src={socket} alt="Live Chat Bubbles Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxTravel}>
                        <img className="portfolio-image" src={travel} alt="Travel Website Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxObjectRecognition}>
                        <img className="portfolio-image" src={object} alt="Multiple Object Recognition on Videos Using Deep Learning Methods..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigSocketIO} />
            <PopupboxContainer {...popupboxConfigTravelWebsite} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
            <PopupboxContainer {...popupboxConfigObjectRecognition} />
        </div>
    )
}

export default Portfolio
