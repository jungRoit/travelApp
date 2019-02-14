import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImg: {
    width: '100%',
    height: 200
  },
  iconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15
  },
  searchIcon: {
    width: 23,
    height: 23,
    marginRight: 15
  },
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
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    paddingLeft: 20,
    paddingBottom: 10
  }
});
export default styles;
