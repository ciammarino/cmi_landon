import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{marginBottom: '2px'}}>Learn React!</h2>
        <p style={{marginTop:'0', marginBottom: '30px'}}>with Christine Iammarino</p>
        <a
          className="btn btn-primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start learning now
        </a>
      </header>
    </div>
  );
}

export default App;
