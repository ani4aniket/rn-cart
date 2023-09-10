import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../colors';
const Button = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      title={title}
      activeOpacity={0.7}
      style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '80%',
    backgroundColor: Colors.black,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Button;
