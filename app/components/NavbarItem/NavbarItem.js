import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class NavbarItem extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.text)} >
      <View style={(this.props.active === this.props.text) ? [styles.navItem, styles.active] : styles.navItem }>
        <Text style={[styles.navText]}>{this.props.text}</Text>
      </View>
    </TouchableOpacity>
    )
  }

} 