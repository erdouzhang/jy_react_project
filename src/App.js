import React from 'react';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { Login, Index } from './routers/Router';
import {
  VIEW_SCRREN,
  TOPOLOGY,
  AREA_MONITORING,
  SYSTEM_SETTING
} from './store/Common';
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
         <Route path="/" exact component={ Login }></Route>
         <Route path={VIEW_SCRREN} exact component={ Index }></Route>
         <Route path={TOPOLOGY} exact component={ Index }></Route>
         <Route path={AREA_MONITORING} component={ Index }></Route>
         <Route path={SYSTEM_SETTING} component={ Index }></Route>
      </div>
    </Router>
  );
}

export default App;
