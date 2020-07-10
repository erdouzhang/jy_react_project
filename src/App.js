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
         <Route path="/index" exact component={Index}></Route>
      </div>
    </Router>
  );
}

export default App;
