import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

import images from '../../config/images';

export default class HomeHeader extends React.Component {
  
  render() {
    return (
      <View style={styles.header}>

      <View style={styles.menuBox}>
        <Image style={styles.menuIcon} source={images.menu} />
      </View>

      <View style={styles.titleBox}>
        <Text style={styles.title}>Discover</Text>
      </View>

      <View style={styles.searchBox}>
        <Image style={styles.menuIcon} source={images.search} />
      </View>

    </View>
    )
  }
}