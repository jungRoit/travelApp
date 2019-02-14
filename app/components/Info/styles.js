import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  infoWrapper: {
    flexGrow: 1,
    height: 260
  },
  infoBox: {
    width: '100%',
    height: 200,
    paddingTop: 10,
    paddingBottom: 10
  },
  infoItem: {
    height: 40,
    width: '100%',
    flexDirection: 'row'
  },
  iconBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContent: {
    backgroundColor: 'white',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  detailsBox: {
    height: 200,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10
  },
  detailsText: {
    fontSize: 15,
    textAlign: 'justify'
  }
});
export default styles;
