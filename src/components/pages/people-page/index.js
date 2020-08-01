import React, { Component } from "react";
import { PersonList } from "../../sw-components/item-lists";
import { PersonDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter, Redirect } from "react-router-dom";

class PeoplePage extends Component {
  state = {
    selectedItem: null,
    isloggedIn: false,
  };

  onSelectedItem = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { history } = this.props;
    /* if (!this.state.isloggedIn) {
      return <Redirect to="/" />;
    } */
    return (
      <Row
        left={
          <PersonList
            onSelectedItem={(id) => {
              history.push(`people/${id}`);
            }}
          />
        }
        right={<PersonDetails selectedItem={this.state.selectedItem} />}
      />
    );
  }
}

export default withRouter(PeoplePage);
