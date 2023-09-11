import {StyleSheet, FlatList, Text, View} from 'react-native';
import React, {useState} from 'react';
import ProductItem from '../../../components/ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromWishlist} from '../../../redux/action/WishlistActions';

const Wishlist = () => {
  const wishlistData = useSelector(state => state.WishlistReducer.wishlist);
  console.log('>>>>>>>>WishListData>>>>>>>>>>>>', wishlistData);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.myCartText}> Wishlisted Items</Text>
      <FlatList
        data={wishlistData}
        renderItem={({item}) => {
          console.log('wishlistElements >>>>>>>>', item);
          return (
            <ProductItem
              key={item?.id}
              element={item}
              onRemoveItemWishlist={() => {
                dispatch(removeItemFromWishlist(item?.id));
              }}
            />
          );
        }}
      />
    </View>
  );
};
export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
    width: 320,
    alignSelf: 'center',
    marginTop: 10,
  },
  myCartText: {
    color: '#5f9ea0',
    fontWeight: 'bold',
    fontSize: 20,
  },
  addCartButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItem: 'center',
    width: 320,
    height: 50,
    alignSelf: 'center',
    marginTop: 50,
  },
  cartText: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
