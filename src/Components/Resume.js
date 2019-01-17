import React, { Component } from 'react';

export default class Resume extends Component {
  render() {

    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <ul>
            <li>{education.description1}</li>
            <li>{education.description2}</li>
          </ul>
        </div>
      })
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="skill_images container mx-auto">
              <ul className="skills">
                <img className="html-pic" id="icon" src="/images/html.jpg" alt="" data-toggle="tooltip" data-placement="top" title="HTML"></img>
                <img className="css-pic" id="icon" src="/images/css.jpg" alt="" data-toggle="tooltip" data-placement="top" title="CSS"></img>
                <img className="javascript-pic" id="icon" src="/images/javascript.jpg" alt="" data-toggle="tooltip" data-placement="top" title="JavaScript"></img>
                <img className="bootstrap-pic" id="icon" src="/images/bootstrap.png" alt="" data-toggle="tooltip" data-placement="top" title="Bootstrap"></img>
                <img className="jquery-pic" id="icon" src="/images/jquery.png" alt="" data-toggle="tooltip" data-placement="top" title="JQuery"></img>
                <img className="mysql-pic" id="icon" src="/images/mysql.png" alt="" data-toggle="tooltip" data-placement="top" title="MySql"></img>
                <img className="react-pic" id="icon" src="/images/react.jpg" alt="" data-toggle="tooltip" data-placement="top" title="React"></img>
                <img className="nodejs-pic" id="icon" src="/images/nodejs.png" alt="" data-toggle="tooltip" data-placement="top" title="NodeJS"></img>
                <img className="typescript-pic" id="icon" src="/images/typescript.png" alt="" data-toggle="tooltip" data-placement="top" title="TypeScript"></img>
                <img className="sass-pic" id="icon" src="/images/sass.png" alt="" data-toggle="tooltip" data-placement="top" title="Sass"></img>
                <img className="github-pic img-fluid" id="icon" src="/images/github.png" alt="" data-toggle="tooltip" data-placement="top" title="Github"></img>
                <img className="heroku-pic" id="icon" src="/images/heroku.png" alt="" data-toggle="tooltip" data-placement="top" title="Heroku"></img>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}