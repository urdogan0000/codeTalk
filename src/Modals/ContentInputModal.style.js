import {StyleSheet, Dimensions, Platform} from 'react-native';

const device=Dimensions.get('window')
export default StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:15,
    marginHorizontal:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
height:device.height/3
  },

  inputcontainer: {
    flex:1
  },modal:{
      justifyContent:'flex-end',
      padding:0,
      margin:0
  }
});
