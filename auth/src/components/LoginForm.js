import React, { Component } from "react";
import { TextInput, Text, Picker } from "react-native";
import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={"Hello"}
            placeholder={"email@example.com"}
            value={this.state.text}
            onChangeText={email => {
              this.setState({ email });
              console.log(email);
            }}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Hello!</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
