import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10
  },
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
})
export default styles;