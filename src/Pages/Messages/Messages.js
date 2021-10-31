import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './Messages.style';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../Utils/parseContentData';
import ContentInputModal from '../../Modals/ContentInputModal';
import FloatingActionButton from '../../Components/FloatingActionButton';
import MessageCard from '../../Cards/MessagesCard/MessageCard';
function Messages({group, route}) {
  const [inputModalVisible, setinputModalVisible] = useState(false);
  const [contentList, setcontentList] = useState([]);
  const groupId = route.params.group.id;
  const groupName = route.params.group.name;
 
  useEffect(() => {
    database()
      .ref(`Odalar/${groupId}/messages`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
       
        const parsedData = parseContentData(contentData || {});
        setcontentList(parsedData);
      });
  }, []);
  function handleToggle() {
    setinputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    handleToggle();
    sendContent(content);
  }
  function sendContent(content) {
    const userMail = auth().currentUser.email;
    const contentObj = {
      name: content,
      username: userMail.split('@')[0],
      date:new Date().toISOString()
    };

    database().ref(`Odalar/${groupId}/messages`).push(contentObj);
  }
  function renderMessages({item}) {
    return <MessageCard message={item}></MessageCard>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.groupNameContainer}>
        <Text style={styles.groupNameText}>{groupName} odası kuruldu!</Text>
      </View>
      <FlatList data={contentList} renderItem={renderMessages}></FlatList>
      <FloatingActionButton
        icon="add"
        size={25}
        onPress={handleToggle}></FloatingActionButton>
      <ContentInputModal
        placeholder="Mesajınızı yazınız..."
        visible={inputModalVisible}
        onClose={handleToggle}
        onSend={handleSendContent}></ContentInputModal>
    </View>
  );
}

export default Messages;
