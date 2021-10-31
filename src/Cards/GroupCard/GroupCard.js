import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './GroupCard.style'
function GroupCard({group,onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Text style={styles.textGroup}>{group.name}</Text>
    </TouchableOpacity>
  );
}
export default GroupCard;
