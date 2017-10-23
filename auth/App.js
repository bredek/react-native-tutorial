/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyACmcGmTSsBD2geU1AkjfnC1cSqN1O163Q",
      authDomain: "auth-92d83.firebaseapp.com",
      databaseURL: "https://auth-92d83.firebaseio.com",
      projectId: "auth-92d83",
      storageBucket: "auth-92d83.appspot.com",
      messagingSenderId: "685518308669"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
