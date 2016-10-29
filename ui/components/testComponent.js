import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import SearchResult from './word';

export default class TestInput extends Component {
  constructor(props) {
    super(props);
    this.getRequest = this.getRequest.bind(this);
    this.state ={
      text: 'Try type something',
      foundWord: '',
    }
  }

  getRequest() {
    let that = this;
    let word;
    fetch(`http://beta.jisho.org/api/v1/search/words?keyword=${this.state.text}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.data[0].japanese[0].reading)
        word = responseJson.data[0].japanese[0].reading;
        that.setState({ foundWord: word });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return(
      <View>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
        onSubmitEditing={this.getRequest}
        />
        <SearchResult result={this.state.foundWord} />
      </View>
    )
  }
}
