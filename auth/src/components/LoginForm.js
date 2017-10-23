import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Card, CardSection } from "./common";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Hello!</Text>
        </CardSection>
        <CardSection>
          <Text>Hello!</Text>
        </CardSection>
        <CardSection>
          <Button>Hello!</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
