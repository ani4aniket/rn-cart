import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../../redux/action/CartActions';
import {addToWishlist} from '../../../redux/action/WishlistActions';
const Product = props => {
  let productData = props.route.params;
  const dispatch = useDispatch();

  console.log('productsData', productData);
  const cartItem = useSelector(state => state.CartReducer);

  /////Code for Wishlist /////////
  const wishlistItem = useSelector(state => state.WishlistReducer.wishlist);
  const handleAddToWishlist = data => {
    const payload = {wishlistItem};
    console.log(
      'mywishlistdata>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
      addToWishlist(data),
    );

    dispatch(addToWishlist(data));
  };
  /////Code for Wishlist /////////

  ////////Code for Cart///////////
  const handleAddToCart = data => {
    const payload = {cartItem};
    // console.log('mydatanew', addToCart(data));
    dispatch(addToCart(data));
  };
  ////////Code for Cart///////////

  return (
    <View style={styles.container}>
      <Image source={{uri: productData.image}} style={styles.image} />
      <TouchableOpacity
        onPress={() => {
          handleAddToWishlist(productData);
        }}>
        <Image
          source={require('../../../assets/Images/Favourite.png')}
          style={styles.wishlist}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.productDescription}>
          <Text style={styles.name}>{productData.name}</Text>
          <Text style={styles.body}>{productData.description}</Text>
        </View>
        <Text style={styles.price}>${productData.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.addCartButton}
        onPress={() => {
          handleAddToCart(productData);
        }}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 450,
  },
  productDescription: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 10,
  },
  wishlist: {
    width: 30,
    height: 30,
    left: 300,
    bottom: 420,
  },
  name: {
    color: '#222',
    fontSize: 22,
    padding: 10,
    fontWeight: 'bold',
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
  price: {
    color: '#222',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 14,
    marginLeft: 110,
  },
  body: {
    color: '#222',
    fontSize: 22,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
