import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex:1,
    width: '100%',
    height: 200,
  },
  heartBox: {
    flex:1,
    alignSelf: 'flex-end',
    width: 50,
    height: 50
  },
  contentBox: {
    flex:3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    paddingBottom: 20,
    paddingLeft: 20
  },
  numberBox: {
    flex:1,
  },
  number: {
    fontSize: 55,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',    
  },
  textBox: {
    flex:4,
    paddingLeft: 10,
    paddingBottom: 5
  },
  subText: {
    color: 'white',
    fontSize: 15,
   
  },
  placeTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  }


});
export default styles;
