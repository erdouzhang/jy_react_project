import React, { Component,Fragment} from 'react';
import Menu from '../menu/Menu';
import {  Switch,  Route} from "react-router-dom";
import WrapperTable from '../table/WrapperTable';
import User from '../user/User';
import Eleclist from '../List/Eleclist';
import { MENU_DATA }  from '../../store/System';

class SystemSetting extends Component{
    constructor(...args) {
       super(...args);
       this.state= {
         menuList: MENU_DATA
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
               <Switch>
                    // <Route path="/system_setting/table" component={ WrapperTable } key="a" />
                    // <Route path="/system_setting/test1" component={ WrapperTable } key="b" />
                    <Route path="/system_setting/elect_list" component={ Eleclist } key="c" />
                    <Route path="/system_setting/user" component={ User } key="b" />
               </Switch>
             </div>
           </section>
        </Fragment>
      );
     }
}


export default SystemSetting;
