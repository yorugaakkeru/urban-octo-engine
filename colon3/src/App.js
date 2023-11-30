import React from 'react';
// import ReactDOM from 'react-dom/client';
import logo from './img/catto.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import home from'./pages'
import care from './pages/CareForCats.js'
import catInfo from './pages/InfoAboutCats.js'

function App() {
  return (
    <body className="center">
      {/* header */}
      <header className='App-header-container' >
          <h2>logo spot</h2>
      </header>
      {/* center body :) */}
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
          <div>
          About
          {/* <Router>
            <Routes>
              <Route exact path='/' element={<home/>}/>
              <Route exact path='/are' element={<care/>}/>
              <Route exact path='/catInfo' element={<catInfo/>}/>
            </Routes>
          </Router> */}
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

export default App;

