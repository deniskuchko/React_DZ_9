import React, { Component } from "react";
import Row from "../../row";
import { withRouter, Redirect } from "react-router-dom";

class Authorisation extends Component {
  state = {
    selectedItem: null,
    isloggedIn: true,
  };

  render() {
    const { history } = this.props;
    if (!this.state.isloggedIn) {
      return <Redirect to="/authorisation" />;
    }
    return <Row left={<h1>Authorisation page</h1>} />;
  }
}

export default withRouter(Authorisation);
