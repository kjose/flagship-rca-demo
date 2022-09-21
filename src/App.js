import logo from './logo.svg';
import './App.css';
import { useFsFlag } from "@flagship.io/react-sdk";

function App() {
  const feature1_0_0_enabled = useFsFlag("1.0.0",false);
  const feature1_0_1_enabled = useFsFlag("1.0.1",false);
  const feature1_0_2_enabled = useFsFlag("1.0.2",false);
  const feature1_0_3_enabled = useFsFlag("1.0.3",false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="features">
          {feature1_0_0_enabled.getValue() && <span>Feature 1.0.0</span>}
          {feature1_0_1_enabled.getValue() && <span>Feature 1.0.1</span>}
          {feature1_0_2_enabled.getValue() && <span>Feature 1.0.2</span>}
          {feature1_0_3_enabled.getValue() && <span>Feature 1.0.3</span>}
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
