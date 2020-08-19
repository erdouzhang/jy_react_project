import React, {Component, Fragment} from 'react';
import '../../assets/css/Nav.css';
import { Link } from "react-router-dom";

class Navbar extends Component {
   constructor(...args){
     super(...args);
     this.state={
       currentIndex: 0
     }
   }

   handlerItemsCurrent(index){
     this.setState({
       currentIndex: index
     });
   }
   logOut() {
     let confirmClose = window.confirm('确认退出系统?');
     if(confirmClose) {
      this.props.route.props.history.push({ pathname:'/' });
     }
   }

   render() {
        return (
          <Fragment>
            <header className="nav_wrapper">
                <ul>
                    <li><Link onClick={this.handlerItemsCurrent.bind(this, 0)} to="/view_screen" className={0 == this.state.currentIndex ? "activeItems":null}>可视化大屏</Link></li>
                    <li><Link onClick={this.handlerItemsCurrent.bind(this, 1)} to="/topology" className={1 == this.state.currentIndex ? "activeItems":null}>台区拓扑</Link></li>
                    <li><Link onClick={this.handlerItemsCurrent.bind(this, 2)} to="/area_monitoring/line_loss_total" className={2 == this.state.currentIndex ? "activeItems":null}>台区监测</Link></li>
                    <li className="el_item"><span className="header_title">配电监控系统</span></li>
                    <li><Link onClick={this.handlerItemsCurrent.bind(this, 3)} to="/system_setting/user" className={3 == this.state.currentIndex ? "activeItems":null}>系统信息设置</Link></li>
                    <li className="el_item">14:32:24 管理员 | <span onClick={this.logOut.bind(this)}>退出</span></li>
                </ul>
            </header>
          </Fragment>
        );
    }
}

export default Navbar;
