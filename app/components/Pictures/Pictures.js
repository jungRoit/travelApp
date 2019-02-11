import React from 'react';
import { View, Text, Image, SectionList, FlatList } from 'react-native';
import styles from './styles';


export default class Pictures extends React.Component {

  render() {
    return (
        <FlatList
            data={this.props.place.pictures.images}
            numColumns={2}
            renderItem={({ item }) =><Image style={styles.image} source={item} />}
            // renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
      
     
    )
  }
} 