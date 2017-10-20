/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';
// components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default App = () => {
    return (
      <View>
        <Header headerText={"Header"}/>
        <AlbumList/>
      </View>
    );
}
