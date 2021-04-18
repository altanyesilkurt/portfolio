import React from "react";

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014-2019</h3>
                        <p>I graduated from Yıldız Technical University computer engineering department with 3.01/4 degree in January 2019.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2020</h3>
                        <p>I worked as a software developer at IPERA Technology Solution company <br />I develop the Frontend layers using HTML5,CSS3 and Vue JS.
                        <br />I developed RestAPI using Java Spring Boot with good quality of code<br />I created running Unit test and worked on integration testing
                        <br />I worked on agile scrum methodology and involving in stand-up meetings to monitor progress</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-2021</h3>
                        <p>I worked as a software developer at CFM Cooling and Automation company <br />I developed the Frontend layers using HTML5,CSS3, Angular 8,Angular Material, DevExtreme Material.
                        <br />I exprerienced Docker and its tools<br />I created running unit test and worked on integration testing using with karma, jasmine (over 1000+) , Selenium
                        <br />I worked on agile scrum methodology and involving in stand-up meetings to monitor progress(JIRA)</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    {/* - */}
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021- ∞</h3>
                        <p>I worked as a software developer at Litum Technology company <br />I developed the Frontend layers using HTML5,CSS3, Angular 7,Angular Material, DevExtreme Material.
                        <br />I exprerienced RabbitMQ and Redis.<br />I created running unit test and worked on integration testing using with karma, jasmine (over 500+)
                        <br />I worked on agile scrum methodology and involving in stand-up meetings to monitor progress(Microsoft Azure, JIRA)</p>                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
