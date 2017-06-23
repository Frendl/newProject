/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './App/app'

export default class newProject extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <App />
      </View>
    );
  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
//    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('newProject', () => newProject);

// style={styles.welcome}
*/