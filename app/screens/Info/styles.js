import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 150,
  },
  infoWrapper: {
    flexGrow:1,
  },
  infoBox: {
    width: '100%',
    height:200,
    paddingTop: 10,
    paddingBottom: 10
  },
  infoItem: {
    width: '100%',
    height: 40,
    flexDirection: 'row'
  },
  iconBox: {
    flex:1,
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
    width: '100%',
    height: 600,
    backgroundColor: 'yellow'
  }
})
export default styles;