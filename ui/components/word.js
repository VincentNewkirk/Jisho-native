'use-strict'
import React, { Component } from 'react'
import { Text } from 'react-native'

export default class SearchResult extends Component {
  render() {
    return(
      <Text>
        {this.props.result}
      </Text>
    )
  }
}