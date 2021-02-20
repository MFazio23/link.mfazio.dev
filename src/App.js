import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import Team from "./Team";
import Home from "./Home";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/teams">
                    <Team/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}
