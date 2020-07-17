import React, { Component, Fragment } from 'react';

class Footer extends Component {

  render() {
    let footer = {
      "height":"35px",
      "textAlign": "center",
      "lineHeight": "35px",
      "background": "rgb(126, 126, 126)"
    };
    return (
      <Fragment>
        <footer style={footer}>
           版权信息
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
