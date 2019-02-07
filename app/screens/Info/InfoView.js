import React from 'react';
import {View, Text} from 'react-native';

export default class InfoView extends React.Component {

  render() {
    return (
      <View>
        <Text>Info of {this.props.navigation.getParam('place')}</Text>
      </View>
    )
  }
}