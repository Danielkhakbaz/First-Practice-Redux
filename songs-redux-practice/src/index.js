import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";
import "./Styles/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
