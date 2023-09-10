import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Keyboard,
  Alert,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import CustomTouchableOpacity from '../../../components/CustomTouchableOpacity';
import {useNavigation} from '@react-navigation/native';

import Loader from '../../../components/Loader';
import CustomTextInput from '../../../components/CustomTextInput';
import callApi from '../../../api';
import {useDispatch} from 'react-redux';
import {saveLogin} from '../../../redux/action/ProfileActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [valid, setValid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function validateEmailAndPassword() {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let emailErrorMessage = '';
    let passwordErrorMessage = '';

    if (!email) {
      setValid(false);
      setError('Please provide an email.');
      emailErrorMessage = 'Please provide an email.';
    } else if (!emailRegex.test(email)) {
      setValid(false);
      setError('Please fix the email format.');
      emailErrorMessage = 'Please fix the email format.';
    } else {
      setValid(true);
      setError('');
    }

    if (!password) {
      setValid(false);

      setPasswordError('Please provide a password.');
      passwordErrorMessage = 'Please provide a password.';
    } else {
      setValid(true);
      setPasswordError('');
    }

    console.log('////', valid);
    return valid;
  }
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      console.log('login Screen');
      const ValidData = await validateEmailAndPassword();
      console.log('>>>>>>>validateEmailAndPassword', ValidData);
      console.log('ValidData>>>>>>', ValidData);
      if (ValidData === true) {
        console.log('in');
        const userExists = await callApi('/auth', 'POST', {
          params: {
            email: email,
          },
        });
        console.log('checkingUserExistData>>>>', userExists);
        console.log('emailll', email);
        if (userExists) {
          console.log('length');
          const response = await callApi('/auth', 'POST', {email, password});
          console.log('userLoginData', response);
          dispatch(saveLogin(response));
          if (response) {
            setIsLoading(false);
            Alert.alert('User logged in Successfully', '', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Home'),
              },
            ]);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.font}>Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        {error !== '' && <Text style={{color: 'red'}}>{error}</Text>}
        <TextInput
          style={styles.textInput}
          type={'password'}
          placeholder="Enter Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        {passwordError !== '' && (
          <Text style={{color: 'red'}}>{passwordError}</Text>
        )}
        <CustomTouchableOpacity
          title="Login"
          textColor={'white'}
          onPress={handleLogin}
          isLoading={isLoading}
          // onPress={navigation.navigate('Home')}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Registeration');
          }}>
          <Text style={styles.textFont}>Create New Account?</Text>
        </TouchableOpacity>
        {error !== '' && <Text>{error}</Text>}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFont: {
    fontSize: 18,
    fontWeight: 800,
    alignSelf: 'center',
    marginTop: 20,
    color: 'black',
  },
  textInput: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInputPwd: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
  },
  button: {
    marginTop: 100,
  },
  font: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 600,
    color: 'black',
  },
});
export default Login;
