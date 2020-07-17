import React , {Component, Fragment } from 'react';
// 使用路由导航
import { Route,  Switch } from "react-router-dom";
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
               <Route path="/view_screen" exact component={ View_Screen }></Route>
               <Route path="/topology" exact component={ Topology }></Route>
               <Route path="/area_monitoring" component={ AreaMonitoring }></Route>
               <Route path="/system_setting" component={ SystemSetting }></Route>
            </Switch>
          </Fragment>
      );
    }
}

export default Container;
