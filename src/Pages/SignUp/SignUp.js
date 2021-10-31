// In App.js in a new project

import React, {useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './SignUp.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import * as Yup from 'yup';
import FormErrorMessage from '../../FormErrorMessage/FormErrorMessage';
import authErrorMessageParser from '../../Utils/authErrorMessageParser';

const initialValues = {userMail: '', password: '', repassword: ''};

const SignSchema = Yup.object().shape({
  userMail: Yup.string()
    .email('Geçersiz e-mail')
    .required('E-mailinizi Giriniz...'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Şifrenizi Giriniz...'),
  repassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
function SignUp({navigation}) {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    return () => setloading(false);
  }, []);

  function goLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    try {
      setloading(true);
      await auth().createUserWithEmailAndPassword(
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
        validationSchema={SignSchema}>
        {({values, handleChange, handleSubmit, errors}) => (
          <>
            {errors.userMail ? (
              <FormErrorMessage
                errorMessage={errors.userMail}></FormErrorMessage>
            ) : null}
            <Input
              placeholder="E-postanızı giriniz"
              value={values.userMail}
              onChange={handleChange('userMail')}
            />

            {errors.password ? (
              <FormErrorMessage
                errorMessage={errors.password}></FormErrorMessage>
            ) : null}
            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onChange={handleChange('password')}
            />
            {errors.repassword ? (
              <FormErrorMessage
                errorMessage={errors.repassword}></FormErrorMessage>
            ) : null}
            <Input
              placeholder="Şifrenizi tekrardan giriniz"
              value={values.repassword}
              onChange={handleChange('repassword')}
            />

            <Button
              loading={loading}
              title="Kaydı Tamamla"
              type="primary"
              onPress={handleSubmit}></Button>
            <Button
              title="Geri Dön"
              type="secondary"
              onPress={goLogin}></Button>
          </>
        )}
      </Formik>
    </View>
  );
}

export default SignUp;
