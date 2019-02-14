import React from "react";
import { Text, Image, SectionList, FlatList } from "react-native";
import styles from "./styles";

export default class Pictures extends React.Component {
  render() {
    return (
      <SectionList
      style={styles.list}
        sections={this.props.place}
        renderItem={this.renderItems}
        renderSectionHeader={({ section }) => <Text>{section.date}</Text>}
      />
    );
  }

  renderItems = item => {
    return (
      <FlatList
        data={item.item}
        numColumns={2}
        renderItem={({ item }) => <Image style={styles.image} source={item} />}
      />
    );
  };
}
