import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 5,
    width:'100%', 
    backgroundColor:'#E07E5B',
  },
  menuBox: {
    justifyContent:'center',
    alignItems: 'center',
    height:'80%',
    width:'20%'
  },
  menuIcon: {
    height: '40%',
    width: '40%'
  },
  titleBox: {
    justifyContent:'center',
    alignItems: 'center',
    height:'50%',
    width:'50%'
    
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  searchBox: {
    justifyContent:'center',
    alignItems: 'center',
    height:'90%',
    width:50,
    paddingBottom: 4
  }
});

export default styles;
