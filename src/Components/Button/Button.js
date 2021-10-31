import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';

function Button({title, onPress, type = 'primary', loading}) {
  return (
    <TouchableOpacity style={styles[type].container} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size='large'></ActivityIndicator>
      ) : (
        <Text style={styles[type].title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
