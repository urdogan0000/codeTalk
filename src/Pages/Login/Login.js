// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import * as Yup from 'yup';
import FormErrorMessage from '../../FormErrorMessage/FormErrorMessage';
import authErrorMessageParser from '../../Utils/authErrorMessageParser';
import {StackActions} from '@react-navigation/native';

const initialValues = {userMail: 'hydrurdgn@gmail.com', password: '123123'};

const LoginSchema = Yup.object().shape({
  userMail: Yup.string().email('Geçersiz e-mail').required('Required'),
  password: Yup.string().required('Şifrenizi Giriniz'),
});
function Login({navigation}) {
  const [loading, setloading] = useState(false);

  
  function goSignUp() {
    navigation.navigate('Signup');
  }
  useEffect(() => {
    return () => setloading(false);
  }, []);
  async function handleFormSubmit(formValues) {
    try {
      setloading(true);
      await auth().signInWithEmailAndPassword(
        formValues.userMail,
        formValues.password,
      );
      
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    } finally {
      setloading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Chat Group </Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={LoginSchema}>
        {({values, handleChange, handleSubmit, errors}) => (
          <>
            {errors.userMail ? (
              <FormErrorMessage
                errorMessage={errors.userMail}></FormErrorMessage>
            ) : null}
            <Input
              placeholder="E-postanızı giriniz"
              value={values.userMail}
              onChange={handleChange('userMail')}></Input>

            {errors.password ? (
              <FormErrorMessage
                errorMessage={errors.password}></FormErrorMessage>
            ) : null}
            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onChange={handleChange('password')}></Input>

            <Button
              loading={loading}
              title="Giriş Yap"
              type="primary"
              onPress={handleSubmit}></Button>
            <Button
              title="Kayıt Ol"
              type="secondary"
              onPress={goSignUp}></Button>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Login;
