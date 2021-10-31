import {StyleSheet,Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    padding:Platform.OS=='android' ? 5:15,
    margin:5,
    borderBottomColor:'white',
    borderBottomWidth:1
  },
});
