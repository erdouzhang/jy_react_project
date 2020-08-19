import React, { Component, Fragment } from 'react';
import Search from '../search/Search';
import Table from '../table/Table';
import Svg from '../svg/Svg';

class User extends Component {

  render() {

    return (
      <Fragment>
         <Search />
        <section className="table_wrapper">
          <Svg />
        </section>
      </Fragment>
    );
  }
}

export default User;
