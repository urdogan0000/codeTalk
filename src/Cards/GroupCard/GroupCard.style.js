import {StyleSheet, Dimensions} from 'react-native';
import Color from '../../Components/Colors/Color';

const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: device.width / 2.3,
    height: device.height / 4,
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 10,
    margin: 10,
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  textGroup: {
    color: Color.primaryColor,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
