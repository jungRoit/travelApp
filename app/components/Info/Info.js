import React from 'react';
import { View, Text, ScrollView, Image, } from 'react-native';

import styles from './styles';

import images from '../../config/images';


export default class Info extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Discover',
      headerStyle: {
        backgroundColor: "transparent",
      },
    }
  }

  render() {
    return (

        <ScrollView style={styles.infoWrapper}>

          <View style={styles.infoBox}>

            <View style={styles.infoItem}>
              <View style={styles.iconBox}>
                <Image source={images.location} />
              </View>
              <View style={styles.iconContent}>
                <Text>{this.props.place.info.location}</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <View style={styles.iconBox}>
                <Image source={images.contact} />
              </View>
              <View style={styles.iconContent}>
                <Text>Call {this.props.place.info.contact}</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <View style={styles.iconBox}>
                <Image source={images.openAt} />
              </View>
              <View style={styles.iconContent}>
                <Text>Opens at: {this.props.place.info.openingTime}</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <View style={styles.iconBox}>
                <Image source={images.website} />
              </View>
              <View style={styles.iconContent}>
                <Text>{this.props.place.info.website}</Text>
              </View>
            </View>

          </View>

          <View style={styles.detailsBox}>
            <Text style={styles.detailsText}>{this.props.place.info.details}</Text>
          </View>
        </ScrollView>

    )
  }
}