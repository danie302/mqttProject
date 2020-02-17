// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "../components/App";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Data from "../components/Data";

const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/data" exact component={Data} />
        </Switch>
    </App>
);

export default AppRoutes;
