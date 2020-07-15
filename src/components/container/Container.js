import React , {Component, Fragment } from 'react';
// 使用路由导航
import { BrowserRouter as Router,  Route,  Switch } from "react-router-dom";
import { View_Screen, Topology, AreaMonitoring, SystemSetting} from '../../routers/Router';

import '../../assets/css/Contanier.css';

class Container extends Component {
    constructor(...args){
      super(...args);
    }
    render() {
      return (
          <Fragment>
            <Switch>
               <Route path="/index/view_screen" exact component={ View_Screen }></Route>
               <Route path="/index/topology" exact component={ Topology }></Route>
               <Route path="/index/area_monitoring" exact component={ AreaMonitoring }></Route>
               <Route path="/index/system_setting" exact component={ SystemSetting }></Route>
            </Switch>
          </Fragment>
      );
    }
}

export default Container;
