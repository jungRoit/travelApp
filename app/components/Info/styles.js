import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    // paddingTop: 200,
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
    height: 800,
    paddingLeft: 10,
    paddingRight: 10,
  },
  detailsText: {
    fontSize: 15,
    textAlign: 'justify'
  }
})
export default styles;