import React from 'react';
import {Text, View} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance, parseISO, parseIso} from 'date-fns';
import {tr} from 'date-fns/locale';
function MessageCard({message}) {
  const formattedData = formatDistance(parseISO(message.date), new Date(), {
    locale: tr,
    addSuffix: true,
  });
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topNameText}>{message.username}</Text>
        <Text style={styles.topDateText}>{formattedData}</Text>
      </View>
      <View style={styles.text}><Text style={styles.textGroup}>{message.name}</Text></View>
      
    </View>
  );
}
export default MessageCard;
