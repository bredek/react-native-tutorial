import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  renderDescription() {
    console.log(this.props.library.id);
    console.log(this.props.selectedLibraryId);

    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { title, id } = this.props.library;
    const { selectedLibraryId } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
