import React from "react";
import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Intros from "./Components/Intro";
import Card from "./Components/card";
import Footer from "./Components/footer";
import "./App.css";
import Location from './Location';
import Iframe from './Components/IFrame';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Homepage from './Components/Homepages';
import Map from './Components/Map';
import Team from './Components/Team';
import Features from './Components/Features&Solutions';


function App() {
  return (
    <Router>
    <Switch>
         <Route exact path="/" component={Homepage} />
         <Route exact path="/location" component={Location} />
         <Route exact path="/iFrame" component={Iframe} />
         <Route exact path="/map" component={Map} />
         <Route exact path="/team" component={Team} />
         <Route exact path="/features" component={Features} />

       </Switch>

 </Router>
  );
}

export default App;
