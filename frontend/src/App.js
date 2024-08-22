import logo from './ola.png';
import './App.css';
import Component  from './componentt.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Centro de adopción <code>de gatitos</code>
        </p>
        <a
        >
          Te estan esperando!!!
        </a>
        <Component/>
      </header>
    </div>
  );
}

export default App;
