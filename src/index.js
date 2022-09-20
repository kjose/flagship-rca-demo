import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FlagshipProvider } from "@flagship.io/react-sdk";
import { v4 as uuidv4 } from 'uuid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
    <App />
  </FlagshipProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
