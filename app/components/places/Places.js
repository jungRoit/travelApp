import React from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import heartPic from '../../assets/img/heart.png';
import heartActivePic from '../../assets/img/heart-active.png';

export default class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoved: false
    }
  }

  toggleHeart = () => {
    this.setState(prevState => ({ isLoved: !prevState.isLoved }));
  }

  render() {
    return (

      <View style={{ borderBottomWidth: 2, borderColor: 'white' }}>
        <TouchableWithoutFeedback
          onPress={alert('pressed')}
        >
          <ImageBackground
            source={this.props.image}
            style={styles.backgroundImage}>
            <TouchableWithoutFeedback onPress={this.toggleHeart}>
              <ImageBackground
                source={(this.state.isLoved) ? heartActivePic : heartPic}
                style={styles.heartBox} />
            </TouchableWithoutFeedback>
            <View style={styles.contentBox}>
              <View style={styles.numberBox}>
                <Text style={styles.number}>{this.props.numberOfThings}</Text>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.subText}>Things to do in</Text>
                <Text style={styles.placeTitle}>{this.props.place}</Text>
              </View>

            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>

    )
  }
}