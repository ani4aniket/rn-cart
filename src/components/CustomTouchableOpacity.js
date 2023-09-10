import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

const CustomTouchableOpacity = ({
  onPress,
  title,
  bgColor,
  textColor,
  isLoading,
}) => {
  // console.log(onPress);
  return (
    <TouchableOpacity onPress={onPress} title={title}>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.text}>Login</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;

const styles = StyleSheet.create({
  container: {
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
});
