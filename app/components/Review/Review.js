import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles';

import getRelativeTime from '../../utils/getRelativeTime';

export default class Review extends React.Component {
  render() {
    return (
      <View style={styles.reviewBox}>
        <View style={styles.imageBox}>
          <Image source={this.props.place.item.proPic} style={styles.image} />
        </View>
        <View style={styles.contentBox}>
          <View style={styles.reviewerDetails}>
            <Text style={styles.reviewerName}>
              {this.props.place.item.name}
            </Text>
            <Text style={styles.rating}>{this.props.place.item.rating}</Text>
          </View>
          <View style={styles.reviewText}>
            <Text>{this.props.place.item.comment}</Text>
            <Text style={styles.timeText}>
              {getRelativeTime(this.props.place.item.addedDate)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
