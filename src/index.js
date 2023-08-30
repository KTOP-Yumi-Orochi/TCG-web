import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./assets/font.css";
import { LandingContextProvider } from "./contexts/LandingContext";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "hooks/useGetLibrary";
import Web3ReactManager from "components/web3ReactManager";
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactManager>
        <LandingContextProvider>
          <App />
        </LandingContextProvider>
      </Web3ReactManager>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
