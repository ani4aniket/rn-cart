import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
export const SLIDER_WIDTH = Dimensions.get('window').width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.body}>${item.price}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  body: {
    color: '#222',
    fontSize: 20,
  },
  name: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingTop: 20,
  },
  description: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
});
export default CarouselCardItem;
