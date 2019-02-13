import React from 'react';
import { View, Text, Image, SectionList, FlatList, ScrollView } from 'react-native';

import styles from './styles';


export default class Pictures extends React.Component {

  render() {
    return (
      <ScrollView style={styles.wrapper}>
      {this.props.place.map((object =>
        <View>
          <Text style={styles.sectionTitle}>{object.date}</Text>
          <FlatList
            style={styles.list}
            numColumns={2}
            data={object.images}
            renderItem={({ item }) => <Image style={styles.image} source={item} />}
          />
        </View>
      ))}
      </ScrollView>
    )
  }
} 