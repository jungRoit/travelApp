import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  infoWrapper: {
    flexGrow:1,
    paddingTop: 200,
  },
  infoBox: {
    width: '100%',
    height:200,
    paddingTop: 20,
    paddingBottom: 20
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