import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navItem: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  navText: {
    fontSize: 20,
    color: 'gray'
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: 'red'
  }
});

export default styles;
