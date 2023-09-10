import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import callApi from '../../api';
const Registeration = () => {
  let isValid = true;
  let badEmail = false;
  let badPassword = false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

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
  const handleSignUp = async () => {
    const ValidData = await validateEmailAndPassword();
    console.log('>>>>>>>', error);
    console.log('>>>>>>>validateEmailAndPassword', ValidData);
    if (ValidData === true) {
      console.log('in');
      const userExists = await callApi('/auth', {
        params: {
          email: email,
        },
      });
      console.log('checkingUserExistData>>>>', userExists.data);
      console.log('emailll', email);
      if (!userExists.data.length) {
        console.log('length');
        const response = await callApi('/auth', 'POST', {email, password});
        console.log('responseData>>>>', response, response.status);
        console.log('responseData>>>>', response.data);
        console.log('responseData>>>>', response.data.message);
        if (response.data.email) {
          Alert.alert('User Registered Successfully', '', [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Login'),
            },
          ]);
        }
      }
    }
  };

  const handleValidation = () => {
    handleSignUp();
    validateEmailAndPassword();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Create New Account</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={txt => setEmail(txt)}
        value={email}
      />
      {error !== '' && <Text style={{color: 'red'}}>{error}</Text>}
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={txt => setPassword(txt)}
        value={password}
        secureTextEntry
      />

      {passwordError !== '' && (
        <Text style={{color: 'red'}}>{passwordError}</Text>
      )}

      <TouchableOpacity
        style={styles.touchableOpacity}
        textColor={'white'}
        title="SignUp"
        onPress={handleValidation}>
        <Text style={styles.text}>Sgn Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.textFont}>Already have Account?</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItem: 'center',
    width: 300,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Image: {
    width: 80,
    height: 80,
    marginTop: 100,
    alignSelf: 'center',
  },
  font: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 600,
    color: 'black',
  },
  textFont: {
    fontSize: 18,
    fontWeight: 800,
    alignSelf: 'center',
    marginTop: 20,
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
});
export default Registeration;
