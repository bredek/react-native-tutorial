import React, { Component } from "react";
import firebase from "firebase";
import { TextInput, Text, Picker } from "react-native";
import { Button, Card, CardSection, Input, Spinner } from "./common";

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: "" });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "An error occured!" });
          });
      });
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
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Hello!</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
