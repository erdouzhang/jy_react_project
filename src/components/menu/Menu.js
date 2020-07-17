import React, {Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {

    constructor(...args){
       super(...args);
    }
    render() {


      return (
         <Fragment>
             <section className="menuBox">
                  <ul>
                      {
                        this.props.dataMenuList.map((items) => {
                           return <li key={items.key}><Link to="/table">{items.text}</Link></li>
                        })
                      }

                  </ul>
             </section>
         </Fragment>
      );
    }
}

export default Menu;
