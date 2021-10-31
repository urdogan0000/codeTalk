import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './FloatingActionButton.style';

function FloatingActionButton({icon,size, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={size} color='white'></Icon>
    </TouchableOpacity>
  );
}

export default FloatingActionButton;
