import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles';

import images from '../../config/images';


export default class Review extends React.Component {

  render() {
    return (
        <View style={styles.reviewBox}>
          <View style={styles.imageBox}>
              <Image source={images.profilePic3} style={styles.image} />
          </View>
          <View style={styles.contentBox}>
            <View style={styles.reviewerDetails}>
                <Text style={styles.reviewerName}>William Scout</Text>
                <Text style={styles.rating}>★★★★</Text>
            </View>
            <View style={styles.reviewText}>
              <Text>{`Awesone experience it's such a beautiful to be in lazimpad at evening time. Food place hospitality all are good here.`}</Text>
              <Text style={styles.timeText}>2 Hours ago</Text>
            </View>
          </View>
        </View>
    )
  }
}