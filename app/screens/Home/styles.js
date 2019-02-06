import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 15,
    paddingRight: 5,
    width:'100%', 
    backgroundColor:'#E07E5B',
  },
  menuBox: {
    justifyContent:'center',
    alignItems: 'center',
    height:'50%',
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
    height:50,
    width:50,
    paddingTop: 4
  }
});

export default styles;
