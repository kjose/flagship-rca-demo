import logo from './logo.svg';
import './App.css';
import { FlagshipProvider } from "@flagship.io/react-sdk";
import { v4 as uuidv4 } from 'uuid';
import { useFsFlag } from "@flagship.io/react-sdk";

function App() {
  const feature01enabled = useFsFlag("0.1",false);
  const feature10enabled = useFsFlag("1.0",false);
  const feature11enabled = useFsFlag("1.1",false);

  console.log(feature01enabled);
  console.log(feature10enabled);

  return (
    <div className="App">
      <FlagshipProvider
        envId={process.env.REACT_APP_FS_ENV_ID}
        apiKey={process.env.REACT_APP_FS_API_KEY}
        visitorData={{
          id: uuidv4(),
          context: {
            // some context
          },
          isAuthenticated: false,
        }}
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="features">
            {feature01enabled.getValue() && <span>Feature 0.1</span>}
            {feature10enabled.getValue() && <span>Feature 1.0</span>}
            {feature11enabled.getValue() && <span>Feature 1.1</span>}
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
      </FlagshipProvider>
    </div>
  );
}

export default App;
