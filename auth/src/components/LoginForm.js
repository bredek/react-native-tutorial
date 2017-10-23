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
      error: "",
      loading: false
    };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ 
      error: "",
      loading: true
    });

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

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
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
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
