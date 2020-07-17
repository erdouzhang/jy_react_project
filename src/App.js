import React from 'react';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { Login, Index } from './routers/Router';
// import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
         <Route path="/" exact component={Login}></Route>
         <Route path="/view_screen" exact component={ Index }></Route>
         <Route path="/topology" exact component={ Index }></Route>
         <Route path="/area_monitoring" component={ Index }></Route>
         <Route path="/system_setting" component={ Index }></Route>
      </div>
    </Router>
  );
}

export default App;
