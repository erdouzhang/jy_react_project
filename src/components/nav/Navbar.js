import React, {Component, Fragment} from 'react';
import '../../assets/css/Nav.css';
import { BrowserRouter as Router,  Route, Switch, Link } from "react-router-dom";

class Navbar extends Component {
   constructor(...args){
     super(...args);
   }

   logOut() {
      this.props.route.props.history.push({ pathname:'/' });
   }

   render() {
        return (
          <header className="nav_wrapper">
              <ul>
                  <li><Link to="/index/view_screen">可视化大屏</Link></li>
                  <li><Link to="/index/topology">台区拓扑</Link></li>
                  <li><Link to="/index/area_monitoring">台区监测</Link></li>
                  <li>配电监控系统</li>
                  <li><Link to="/index/system_setting">系统信息设置</Link></li>
                  <li>14:32:24 管理员 |  <span onClick={this.logOut.bind(this)}>退出</span></li>
              </ul>
          </header>
        );
    }
}

export default Navbar;
