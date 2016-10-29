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
  TextInput,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello there Rena!
        </Text>
        <Text style={styles.instructions}>
          I am building my first ever android app!
        </Text>
        <TestInput />
      </View>
    );
  }
}

class TestInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state ={
      text: 'Try type something'
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value})
  }

  render() {
    return(
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
      onChange={this.handleChange}
      value={this.state.text}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
