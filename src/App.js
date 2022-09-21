import logo from './logo.svg';
import './App.css';
import { useFsFlag } from "@flagship.io/react-sdk";

function App() {
  const feature1_0_0_enabled = useFsFlag("1.0.0",false);
  const feature1_0_1_enabled = useFsFlag("1.0.1",false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="features">
          {feature1_0_0_enabled.getValue() && <span>Feature 1.0.0</span>}
        </div>
        <div className="features">
          {feature1_0_1_enabled.getValue() && <span>Feature 1.0.1</span>}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
