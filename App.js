import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store/Store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
export default App;

const styles = StyleSheet.create({});
