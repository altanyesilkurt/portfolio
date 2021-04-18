import { faPhoenixFramework } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faDesktop, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">knowledge</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Front End Design</h3>
              <p>I specialize in front-end design and love fine tuning a great layout.I have worked with Bootstrap,Materialize(Angular Material,Devextreme vs.) and other front-end
              frameworks
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>

              <h3>Full Stack Web Development</h3>
              <p>I am trained int the .NET/C#,Java,Mysql,Javascript,CSS3
                ,HTML5 stack.I have also explored PHP/Laravel development</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faPhoenixFramework} size="2x" /></div>

              <h3>UI/UX Design</h3>
              <p>I have worked with Adobe XD and have heavily researched effective UI/UX Design.I desire to continue to grow my knowledge in this area</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faTasks} size="2x" /></div>

              <h3>Agile Project Experience</h3>
              <p>I have experinece working on an Agile project and have experince with SCRUM standups.I have also worked in small and large organizations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
