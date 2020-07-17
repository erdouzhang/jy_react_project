import React, {Component, Fragment} from 'react';
import Search from '../search/Search';
import Table from './Table';

class WrapperTable extends Component {

  constructor(...args){
     super(...args);

  }
  render() {
    let { pathname } = this.props.location;
     return (
       <Fragment>
          <Search />
          <Table url={pathname}/>
       </Fragment>
     );
  }
}

export default WrapperTable;
