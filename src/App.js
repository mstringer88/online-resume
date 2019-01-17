import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import OtherWork from './Components/otherExperience';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    let { main, resume, portfolio } = this.state.resumeData;
    return (
      <div className="App">
        <Header data={main}/>
        <About data={main}/>
        <Resume data={resume}/>
        <Portfolio data={portfolio}/>
        <OtherWork data={resume}/>
        <Footer data={main}/>
      </div>
    );
  }
}