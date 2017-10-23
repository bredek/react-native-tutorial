import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const styles = {
    viewStyle: {
      backgroundColor: "#f8f8f8",
      justifyContent: "center",
      alignItems: "center",
      height: 60,
      paddingTop: 15,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowColor: "#000",
      elevation: 2,
      position: "relative"
    },
    textStyle: {
      fontSize: 20,
      textAlign: "center"
    }
  };

  const { textStyle, viewStyle } = styles;
  const { headerText, children } = props;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

export { Header };
