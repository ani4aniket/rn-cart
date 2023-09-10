import {StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native';
import React, {useState} from 'react';
import CartItem from '../../../components/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from '../../../redux/action/CartActions';

const Cart = () => {
  const cartData = useSelector(state => state.CartReducer.cart);
  const dispatch = useDispatch();
  const totalAmount = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const totalQuantity = cartData.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.myCartText}> Welcome, Items In Your Cart</Text>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              key={item?.id}
              element={item}
              onRemoveItem={() => {
                dispatch(removeItemFromCart(item?.id));
              }}
            />
          );
        }}
      />
      <View style={styles.checkoutContainer}>
        <View style={styles.amountTextContainer}>
          <Text style={styles.amountText}>Total Price: ${totalAmount}</Text>
          <Text style={styles.amountText}>Items:{totalQuantity} </Text>
        </View>
        <TouchableOpacity style={styles.addCartButton}>
          <Text style={styles.cartText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

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
    width: 150,
    height: 50,
    alignSelf: 'center',
    marginTop: 50,
    flex: 1,
    flexDirection: 'row',
  },
  cartText: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  amountTextContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  amountText: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  checkoutContainer: {
    flex: 2,
    flexDirection: 'row',
  },
});
