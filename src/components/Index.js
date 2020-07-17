import React, { Component, Fragment } from 'react';
import Navbar from './nav/Navbar';
import Container from './container/Container';
// import Topology from './container/Topology';
import Footer from './footer/Footer';

import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";

class Index extends Component {

    constructor(...args){
      super(...args);
    }
    render() {
      return  (
        <Fragment>
          <div className="el_wrapper">
             { /**导航栏**/ }
              <Navbar route={this}/>
             { /**主体内容**/}
             <Container />
             {/**底部组件**/}
             <Footer />
          </div>
        </Fragment>
      );
    }
}

export default Index;
