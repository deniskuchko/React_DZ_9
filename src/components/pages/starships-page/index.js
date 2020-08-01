import React, { Component } from "react";
import { StarshipList } from "../../sw-components/item-lists";
import { StarshipDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter } from "react-router-dom";

class StarshipsPage extends Component {
  state = {
    selectedStarships: null,
  };

  onSelectedItem = (selectedStarships) => {
    this.setState({ selectedStarships });
  };

  render() {
    const { history } = this.props;
    return (
      <Row
        left={
          <StarshipList
            onSelectedItem={(id) => {
              history.push(`starships/${id}`);
            }}
          />
        }
        right={<StarshipDetails selectedItem={this.state.selectedStarships} />}
      />
    );
  }
}

export default withRouter(StarshipsPage);
