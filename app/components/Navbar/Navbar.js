import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';

import styles from './styles';

export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
      <TouchableHighlight>
        <View style={[styles.navItem, styles.active]}>
          <Text style={[styles.navText]}>Info</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.navItem}>
          <Text style={styles.navText}>Pictures</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.navItem}>
          <Text style={styles.navText}>Reviews</Text>
        </View>
      </TouchableHighlight>

    </View>
    )
  }
}