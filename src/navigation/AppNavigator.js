import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../modules/screens/Login/LogIn';
import Home from '../modules/screens/Home/Home';
import Registeration from '../modules/screens/Registeration';
import Product from '../modules/screens/Products/Product';
import ProductList from '../modules/screens/Products/ProductList';
import Cart from '../modules/screens/bottom/Cart';
import Profile from '../modules/screens/bottom/Profile';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Registeration" component={Registeration} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

const styles = StyleSheet.create({});
