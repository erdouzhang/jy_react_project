import React, {Component,Fragment} from 'react';
import { Switch,  Route} from "react-router-dom";
import Menu from '../menu/Menu';
import WrapperTable from '../table/WrapperTable';


// import '../../assets/css/Contanier.css';
class AreaMonitoring extends Component {

  constructor(...args) {
    super(...args);
    this.state= {
      menuList:[{
          "key": 1,
          "text": "首页",
          "path": "/area_monitoring/table"
      },{
        "key": 2,
        "text": "菜单1",
        "path": "/area_monitoring/test1"
      }, {
        "key": 3,
        "text": "菜单2",
        "path": "/area_monitoring/test2"
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
                   <Switch>
                        <Route path="/area_monitoring/table" component={ WrapperTable } key="a" />
                        <Route path="/area_monitoring/test1" component={ WrapperTable } key="b" />
                        <Route path="/area_monitoring/test2" component={ WrapperTable } key="c" />
                   </Switch>
                 </div>
           </section>
       </Fragment>
     );
  }
}


export default AreaMonitoring;
