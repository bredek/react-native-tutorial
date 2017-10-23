import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";

class ListItem extends Component {
  render() {
    const { title } = this.props.library;

    return (
      <View>
        <CardSection>
          <Text>{title}</Text>
        </CardSection>
      </View>
    );
  }
}

export default ListItem;
