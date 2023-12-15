import React from 'react';
import data from "./data.json";
import logo from './catto.jpg';

export const Home = () => {
    return (
      <body>
        <div>
        <div className='input-div'>
        <input type="text" placeholder="cat Search"></input>
      </div>
      <img src={logo} className="App-logo" alt="logo" />

            <h1>cats are aliens.com/ home page</h1>
            <div className='catBoxesContainer'>
              <cat-box id='corner'>
                
              {data.cats.name}
              </cat-box>
            </div>
        </div>

      </body>
    );
  }
  
