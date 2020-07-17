import React, {Component,Fragment} from 'react';
import { BrowserRouter as Router, Switch,  Route, useParams, useRouteMatch } from "react-router-dom";
import Menu from '../menu/Menu';
import Table from '../table/Table';

// import '../../assets/css/Contanier.css';
class AreaMonitoring extends Component {

  constructor(...args) {
    super(...args);
    this.state= {
      menuList:[{
          "key": 1,
          "text": "首页"
      },{
        "key": 2,
        "text": "菜单1"
      }, {
        "key": 3,
        "text": "菜单2"
      }]
    }
  }
  render() {
     return (
       <Fragment>
          <section className="body_wrapper">
                <div className="menu_left">
                    <Menu dataMenuList={this.state.menuList} />
                </div>

                 <div className="content_wrapper">
                   <Table />
                 </div>

           </section>
       </Fragment>
     );
  }
}


export default AreaMonitoring;
