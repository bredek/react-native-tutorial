import React, { Component } from "react";
import { TextInput, Text, Picker } from "react-native";
import { Button, Card, CardSection } from "./common";

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput 
          value={this.state.text}
          onChangeText={(text)=>{
            this.setState({text});
            console.log(this.state.text);
          }}
          style={{ height: 20, width: 100 }} 
          />
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
