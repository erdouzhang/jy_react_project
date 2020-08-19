import React, {Component, Fragment} from 'react';
import '../../assets/css/Search.css';

class Search extends Component {
    constructor(...args){
      super(...args);
      console.log(this.props);
      this.state = {
        data:[{
          title:'供电段',
          type: 2,
        },{
          title:'用户名',
          placehoder:'用户名',
          type: 1,
        },{
          title:'性别',
          placehoder:'性别',
          type: 1,
        }]
      }
    }
    render() {
      return (
        <section className="table_search">
           {
             this.state.data.map((items,index) => {
                return (
                    parseInt(items.type) == 1 ?
                    <span className="search_items" key={index}>{items.title} <input placeholder={items.placehoder} type="text"/></span> :
                    <span className="search_items" key={index}>{items.title} <select><option>请选择</option></select></span>
                )
             })
           }
           <button type="button">查询</button>
        </section>
      );
    }
}

export default Search;
