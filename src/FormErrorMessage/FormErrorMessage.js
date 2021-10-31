import React from 'react';
import {View, Text} from 'react-native';
import styles from './FormErrorMessage.style';
function FormErrorMessage({errorMessage}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{errorMessage}</Text>
    </View>
  );
}

export default FormErrorMessage;
