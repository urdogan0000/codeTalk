import {StyleSheet, Dimensions, Platform} from 'react-native';
import Color from '../../Components/Colors/Color';
const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryColor,
  },
  headerContainer: {
    minHeight: 100,
    height: device.height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: Platform.OS == 'android' ? 80 : 100,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    
  },
});
