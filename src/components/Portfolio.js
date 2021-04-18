import React from "react";
import socket from "../images/socket.png";
import travel from "../images/travel.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {
    //SocketIO
    const openPopupboxSocketIO = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={socket} alt="Live Chat Bubbles Project..." />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://socketio-live-chat-bubbles.herokuapp.com/", "_blank")}>https://socketio-live-chat-bubbles.herokuapp.com/</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/altanyesilkurt/socketio-live-chat-bubbles", "_blank")}>https://github.com/altanyesilkurt/socketio-live-chat-bubbles</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigSocketIO = {
        titleBar: {
            enable: true,
            text: "Live Chat Bubbles."
        },
        fadeIn: true,
        fadeInSpeed: 500,
        close:()=>{(this).popupboxConfigPortfolio.titleBar=null}
    }

    // City Guide App
    const openPopupboxTravel = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={travel} alt="Travel Website Project..." />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://legend-travel.netlify.app/", "_blank")}>https://legend-travel.netlify.app/</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/altanyesilkurt/TravelWebsite", "_blank")}>https://github.com/altanyesilkurt/TravelWebsite</a>
            </>
        )
        PopupboxManager.open({ content })
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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}>https://github.com/8020Coding/portfilio</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "Poftfolio React and Material UI project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Task Manager React and Redux Project
    const openPopupboxTaskManager = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigTaskManager = {
        titleBar: {
            enable: true,
            text: "Task Manager React and Redux project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div className="portfolio-wrapper">
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
                    <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                        <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigSocketIO} />
            <PopupboxContainer {...popupboxConfigTravelWebsite} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
            <PopupboxContainer {...popupboxConfigTaskManager} />
        </div>
    )
}

export default Portfolio
