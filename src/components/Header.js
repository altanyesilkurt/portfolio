/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
            <canvas></canvas>
                <h1>wEB Design and Development </h1>
                <Typed
                    className="typed-text"
                    strings={["Web Development", "UI/UX Design", "Web Services", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                 <Link smooth={true} to="contacts" offset={-110} className="btn-link" ><a className="btn-main-offer">contact me</a></Link>
            </div>

        </div>
    )
}

export default Header
