import React from 'react';
// import ReactDOM from 'react-dom/client';
import Routes from "./RoutesRoutingRoute.js"
import './App.css';


function App() {
  return (
    
    <body className="center">
      {/* header */}
      <header className='App-header-container' >
          <h2>logo spot</h2>
      </header>
      {/* center body :) */}
      
        

        
        <br/>
        <Routes/>
        <br/>


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

export default App;

