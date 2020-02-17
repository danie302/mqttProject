import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Connector } from "mqtt-react";

// Components
import AppRoutes from "./config/routes";

render(
    <Router>
        <Connector mqttProps="ws://18.232.205.226:9001">
            <AppRoutes />
        </Connector>
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
