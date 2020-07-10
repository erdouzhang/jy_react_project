import React, { Component, Fragment } from 'react';
import Navbar from './nav/Navbar';
import Container from './container/Container';
import Footer from './footer/Footer';

class Index extends Component {

    constructor(...args){
      super(...args);
    }
    render() {
      return  (
        <div className="el_wrapper">
           { /**导航栏**/ }
           <Navbar />
           { /**主体内容**/}
            <Container />
           {/**底部组件**/}
           <Footer />
        </div>
      );
    }
}

export default Index;
