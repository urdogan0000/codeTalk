import {StyleSheet, Dimensions} from 'react-native';
import Color from '../../Components/Colors/Color';
const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryColor,
  },
  groupNameContainer: {
    width: device.width * 0.9,
    height: device.height * 0.09,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: device.width * 0.05,
    marginVertical: device.height * 0.02,
    borderStyle: 'dashed',
  },
  groupNameText:{
      color:'white',
      fontWeight:'bold',
      fontSize:20
  }
});
