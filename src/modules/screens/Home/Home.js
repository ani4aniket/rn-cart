import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Search from '../bottom/Search';
import Main from '../bottom/Main';
import Cart from '../bottom/Cart';
import Profile from '../bottom/Profile';
import Wishlist from '../bottom/Wishlist';
import {useSelector} from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useSelector(state => state);
  return (
    <View style={styles.container}>
      <View style={{marginBottom: '20%'}}>
        {selectedTab == 0 ? (
          <Main />
        ) : selectedTab == 1 ? (
          <Search />
        ) : selectedTab == 2 ? (
          <Cart />
        ) : selectedTab == 3 ? (
          <Wishlist />
        ) : (
          <Profile />
        )}
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            style={styles.imageIcon}
            source={require('../../../assets/Images/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            style={styles.imageIcon}
            source={require('../../../assets/Images/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            style={styles.imageIcon}
            source={require('../../../assets/Images/cart.png')}></Image>
          <View style={styles.cartADD}>
            <Text style={styles.textCart}>{data.CartReducer.cart.length}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            style={styles.imageIcon}
            source={require('../../../assets/Images/Favourite.png')}></Image>
          <View style={styles.cartADD}>
            <Text style={styles.textCart}>
              {data.WishlistReducer.wishlist.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            style={styles.imageIcon}
            source={require('../../../assets/Images/account.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    width: 360,
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableOpacity: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartADD: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
  textCart: {
    color: '#fff',
    fontWeight: 600,
  },
  imageIcon: {
    width: 24,
    height: 24,
  },
});
