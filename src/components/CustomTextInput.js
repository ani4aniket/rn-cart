import {StyleSheet, TextInput, View, Image} from 'react-native';
import React from 'react';

const CustomTextInput = props => {
  // console.log('wiuwuy', props);
  const {placeholder, type, onChangeText, value, icon} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.icons} source={icon} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        value={value}
        // icon={icon}
        // keyboardType={type ? type: 'default'}
        secureTextEntry={type ? true : false}
      />
    </View>
  );
};
export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
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
  icons: {
    width: 30,
    height: 30,
  },
  textInput: {
    marginLeft: 10,
  },
});
