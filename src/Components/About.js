import React, { Component } from 'react';

export default class About extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Michael Stringer Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <span>
                    <br />
                    {city}, {state}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <aside className="four columns footer-widgets">
                <div className="columns download">
                  <p>
                    <a  href='Michael Stringer Resume.pdf' download ><button type="button" className="button"><i className="fa fa-download"></i>Download Resume</button></a>
                   </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    );
  }
}