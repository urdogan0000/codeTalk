import {StyleSheet, Platform} from 'react-native';


const baseStyles = StyleSheet.create({
  container: {
    padding: Platform.OS == 'android' ? 16 : 20,
    margin: 5,
    borderRadius:10,
   
    
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...baseStyles.container,
      backgroundColor: '#ffb160',
      
    },
    title: {
      ...baseStyles.title,
      color: '#fff',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      ...baseStyles.container,
      backgroundColor: 'white',
      borderColor:'#ffb160'
    },
    title: {
      ...baseStyles.title,
      color: '#ffb160',
    },
  }),
};
