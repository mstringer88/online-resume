import React, { Component } from 'react';

export default class otherExperience extends Component {
  render() {
    if (this.props.data) {
      var otherWork = this.props.data.otherWork.map(work => {
        return <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span>
            <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      })
      var military = this.props.data.military.map(military => {
        return <div key={military.company}>
          <h3>{military.company}</h3>
          <p className="info">{military.title}<span>&bull;</span>
            <em className="date">{military.years}</em>
          </p>
          <p>{military.description}</p>
        </div>
      })
    }
    return (
      <section id="resume">

        <div className="row military">
          <div className="three columns header-col">
            <h1><span>Military </span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {military}
              </div>
            </div>
          </div>
        </div>

        <div className="row otherWork">
          <div className="three columns header-col">
            <h1><span>Other Experience</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns main-col">
                {otherWork}
              </div>
            </div>
          </div>
        </div>


      </section>
    )
  }
}