import React, {Component, Fragment} from 'react';

// import '../../assets/css/Contanier.css';

class View_Screen extends Component {

    render() {
        return (
          <Fragment>
            <section className="body_wrapper">
                 {/**三栏布局**/}
                 {/**左边布局**/}
                <section className="el_items el_leftBox">
                     <div className="left_item">1</div>
                     <div className="left_item">2</div>
                     <div className="left_item">3</div>
                     <div className="left_item">4</div>
                </section>
                 {/**中间布局**/}
                <section className="el_items el_middleBox">
                   GIS图
                </section>
                 {/**右边边布局**/}
                <section className="el_items el_rightBox">
                  <div className="right_item">1</div>
                  <div className="right_item">2</div>
                </section>
            </section>
          </Fragment>
        );
    }
}

export default View_Screen;
