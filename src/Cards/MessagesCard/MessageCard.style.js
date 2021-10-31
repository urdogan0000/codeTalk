import {StyleSheet, Dimensions} from 'react-native';
import Color from '../../Components/Colors/Color';

const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: device.width * 0.95,
    
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 10,
    margin: 10,

    backgroundColor: '#fff',
  },
  topContainer: {
    padding: 8,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topNameText: {
    fontSize: 15,
  },
  topDateText: {
    fontStyle: 'italic',
  },
  text: {
    marginHorizontal: 10,
    marginVertical: 8,
  },
  textGroup: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
