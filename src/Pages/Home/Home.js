// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text, BackHandler, Alert, FlatList} from 'react-native';

import styles from './Home.style';
import FloatingActionButton from '../../Components/FloatingActionButton';
import auth from '@react-native-firebase/auth';
import ContentInputModal from '../../Modals/ContentInputModal';
import database from '@react-native-firebase/database';
import parseContentData from '../../Utils/parseContentData';
import GroupCard from '../../Cards/GroupCard';

function Home({navigation, route}) {
  const [inputModalVisible, setinputModalVisible] = useState(false);
  const [contentList, setcontentList] = useState([]);

  //for android user when push back button on main screen alert
  const backAction = () => {
    if (route.name === 'AnaSayfa') {
      Alert.alert(
        'Uyarı',
        'Uygulamadan Çıkış Yapmak İstediğinize Emin Misiniz',
        [
          {
            text: 'Hayır',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'Evet', onPress: () => BackHandler.exitApp()},
        ],
      );
      return true;
    }
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    database()
      .ref('/Odalar/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        
        const parsedData = parseContentData(contentData || {});
        setcontentList(parsedData);
      });

    return () => {
      backHandler.remove();
      handleToggle();
    };
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
    };

    database().ref('/Odalar/').push(contentObj);
  }
  function renderChannel({item}) {
    return <GroupCard group={item} onPress={()=>navigateMessages(item)}></GroupCard>;
  }

  function navigateMessages(group) {
    navigation.navigate('Messages',{group:group})
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contentList}
        renderItem={renderChannel}
        numColumns="2"></FlatList>

      <FloatingActionButton
        icon="add"
        size={25}
        onPress={handleToggle}></FloatingActionButton>
      <ContentInputModal
        placeholder="Kuracağınız grup ismini giriniz..."
        visible={inputModalVisible}
        onClose={handleToggle}
        onSend={handleSendContent}></ContentInputModal>
    </View>
  );
}

export default Home;
