import React, {Component, Fragment} from 'react';
import '../../assets/css/Nav.css';
import { Link } from "react-router-dom";

class Navbar extends Component {
   constructor(...args){
     super(...args);
   }

   logOut() {
      this.props.route.props.history.push({ pathname:'/' });
   }

   render() {

        return (
          <Fragment>
            <header className="nav_wrapper">
                <ul>
                    <li><Link to="/view_screen">可视化大屏</Link></li>
                    <li><Link to="/topology">台区拓扑</Link></li>
                    <li><Link to="/area_monitoring/table">台区监测</Link></li>
                    <li>配电监控系统</li>
                    <li><Link to="/system_setting/table">系统信息设置</Link></li>
                    <li>14:32:24 管理员 | <span onClick={this.logOut.bind(this)}>退出</span></li>
                </ul>
            </header>
          </Fragment>
        );
    }
}

export default Navbar;
