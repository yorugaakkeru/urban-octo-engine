import React from 'react';
// import ReactDOM from 'react-dom/client';
import logo from './img/catto.jpg';
import Routes from "./RoutesRoutingRoute.js"
import './App.css';


function mainPage() {
  return (
    
    <body className="center">
      {/* header */}
      <header className='App-header-container' >
          <h2>logo spot</h2>
      </header>
      {/* center body :) */}
      <Routes/>
      <div className='input-div'>
        <input type="text" placeholder="cat Search"></input>
      </div>

        <img src={logo} className="App-logo" alt="logo" />

        
        <br/>
        <div className='App-cards-container'>
        <article id='corner'>
          ca1
        </article>
        <br/>
        <article id='corner'>
          cat2
        </article>
        <br/>
        <article id='corner'>
          cat3
        </article>
        </div>


        {/* prefooter  */}
        <div className='App-preFooter-container'>
         
          <br/>
          <div>
          About
          <br/>
          <a href="mail.google.com">Home</a>
          </div>
          <div>
          Contact
          <br/>
          <a href="mail.google.com">Care for cats</a>
          </div>
        </div>
        {/* footer */}
        <footer>
          @2023 Colon3  Created by Ilkay&Green Inc.
          {/* <a href="mail.google.com">check this out babyy </a> */}
        </footer>
    </body>
  );
}

export default mainPage;

