import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import menuPic from '../../assets/img/menu.png';
import searchPic from '../../assets/img/search.png';

export default class HomeHeader extends React.Component {
  
  render() {
    return (
      <View style={styles.header}>

      <View style={styles.menuBox}>
        <Image style={styles.menuIcon} source={menuPic} />
      </View>

      <View style={styles.titleBox}>
        <Text style={styles.title}>Discover</Text>
      </View>

      <View style={styles.searchBox}>
        <Image style={styles.menuIcon} source={searchPic} />
      </View>

    </View>
    )
  }
}