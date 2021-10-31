import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './ContentInputModal.style';
import Button from '../Components/Button';
import Modal from 'react-native-modal';

function ContentInputModal({visible, onClose, onSend,placeholder}) {
  const [text, settext] = useState(null);

  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    settext('');
  }
  return (
    <Modal
      swipeDirection="down"
      isVisible={visible}
      style={styles.modal}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.inputcontainer}>
          <TextInput
            multiline={true}
            value={text}
            placeholder={placeholder}
            onChangeText={settext}></TextInput>
        </View>
        <Button title='Gönder' onPress={handleSend}></Button>
      </View>
    </Modal>
  );
}
export default ContentInputModal
