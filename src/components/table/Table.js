import React, {Component} from 'react';

class Table extends Component{
    constructor(...args) {
      super(...args);
      // console.log(this.props.url);

       {
         /**
         表头数据
         **/
       }

      this.state= {
        colArray:['序号','']
      }



    }
    render() {
      return (
        <table border="0" style={{"width": "100%","textAlign":"center"}}>
            <thead>
                <tr>
                    <th>字段</th>
                    <th>字段</th>
                    <th>字段</th>
                    <th>字段</th>
                    <th>字段</th>
                    <th>字段</th>
                    <th>字段</th>
                </tr>
            </thead>
            <tbody>
                 <tr>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                 </tr>
                 <tr>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                 </tr>
                 <tr>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                 </tr>
                 <tr>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                 </tr>
                 <tr>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                   <td>字段</td>
                 </tr>
            </tbody>
        </table>

      );
    }
}

export default Table;
