import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import NavbarItem from '../NavbarItem';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      activeTab: 'Info'
    }
  }

  render() {
    
    return (
      <View style={styles.navbar}>
      {this.props.list.map((item,index) => 
        <NavbarItem key={index} onPress={this.navIconPressed} text={item} active={this.state.activeTab} />
        )}
    </View>
    )
  }

  navIconPressed = (text) => {
    this.props.onPress(text);
    this.setState({ activeTab: text });
  }
}