import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class TestInput extends Component {
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
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChange={this.handleChange}
      value={this.state.text}
      />
    )
  }

}
