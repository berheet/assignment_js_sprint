import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <header>
        <div className="nav">DesignBetter.Co</div>
        <div className ="navLinksFlex"> 
            <p style={{margin: "50px"}}> Books</p>
            <p style={{margin: "50px"}}> Podcast</p>
            <p style={{margin: "50px"}}> Workshops</p>
        </div>
        <div>
        <div className="subscribeBtn">Subscribe</div> 
          </div>
      </header>

      <header>
        <div className = "middleSectionFlex">
          <h1 style={{color: "white"}}> Discover. Learn. Elevate.</h1>
          <p style={{color: "white"}}>Introducing the best practices, stories, and insights from the world’s top design leaders.</p> 
            <p style={{color: "white"}}>Loaded with in-depth books, podcasts, and more, DesignBetter.Co is your essential </p>
            <p style={{color: "white"}}>guide to building remarkable products and teams.</p>
            <div className="startExploringBtn">Start Exploring</div>
          </div>
          
          
        </header>

        <header>
          <div className="invisionPresents"> INVISION PRESENTS </div>
          <div className ="bottomSectionFlex">
          {/* <p style={{color: "white"}}> | </p> */}
            <p style={{color: "white"}}> Scroll </p> </div>
            <div className ="socialMediaFlex">
            <p style={{color: "white"}}>T</p>
            <p style={{color: "white"}}>F</p>
            <p style={{color: "white"}}>in</p>
            <p style={{color: "white"}}>C</p>
            </div>
            {/* <div className ="socialMediaFlex">
            <p>T</p>
            <p>F</p>
            <p>in</p>
            <p>C</p>
              </div> */}
          </header>
        </div>
    );
  }
}

export default App;
