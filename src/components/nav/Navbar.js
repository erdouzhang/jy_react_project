import React, {Component, Fragment} from 'react';
import '../../assets/css/Nav.css';

class Navbar extends Component {
   constructor(...args){
     super(...args);
   }

   render() {
        return (
          <header className="nav_wrapper">
              <ul>
                  <li>可视化大屏</li>
                  <li>台区拓扑</li>
                  <li>台区监测</li>
                  <li>配电监控系统</li>
                  <li>系统信息设置</li>
                  <li>14:32:24 管理员 |  退出</li>
              </ul>
          </header>
        );
    }
}

export default Navbar;
