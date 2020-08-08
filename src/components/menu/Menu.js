import React, {Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/Menu.css';

class Menu extends Component {

    constructor(...args){
       super(...args);
       this.state = {
         showOrHide: false
       }
    }
    handlerState(items, e) {
      if(items.childMenu) {
        // let state = this.state.showOrHide;
        let dl = e.currentTarget.nextSibling;
        let classListName = dl.classList[0];

        if(classListName == 'boxDlShow') {
          dl.removeAttribute('class', 'boxDlShow');
          dl.setAttribute('class', 'boxDlHide');
        } else {
          dl.removeAttribute('class', 'boxDlHide');
          dl.setAttribute('class', 'boxDlShow');
        }
      }

    }
    render() {
      return (
         <Fragment>
             <section className="menuBox">
                  <ul>
                      {
                        this.props.dataMenuList.map((items) => {
                          return <li key={items.key}><Link className={items.childMenu ? 'iconItems' : null} onClick={this.handlerState.bind(this, items)} to={`${items.path}`}>{items.text}</Link>
                                   { items.childMenu ?
                                     <dl className="boxDlHide">
                                        {items.childMenu ? items.childMenu.map((element) => {
                                           return <dd key={element.key}><Link to={`${element.path}`}>{element.text}</Link></dd>
                                        }): null }
                                     </dl> : null}
                                  </li>
                        })

                      }
                  </ul>
             </section>
         </Fragment>
      );
    }
}

export default Menu;
