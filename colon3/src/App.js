import logo from './img/catto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />
        <h1>cats are aliens.com</h1>
        <input type="text" placeholder="cat Search"></input>
    </div>
  );
}

export default App;
