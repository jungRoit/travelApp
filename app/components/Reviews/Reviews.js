import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles';

import Review from '../Review';


export default class Reviews extends React.Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <Review />
      </View>
    )
  }
}