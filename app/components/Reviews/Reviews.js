import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles';

import Review from '../Review';

export default class Reviews extends React.Component {
  render() {
    return (
      <FlatList
        style={styles.wrapper}
        data={this.props.place}
        renderItem={item => <Review place={item} />}
      />
    );
  }
}
