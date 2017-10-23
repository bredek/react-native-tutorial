import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
// import ListItem from "./ListItem";

class LibraryList extends Component {
  render() {
    const { libraries } = this.props;
    console.log(libraries);
    return(
        <Text>Test</Text>
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
