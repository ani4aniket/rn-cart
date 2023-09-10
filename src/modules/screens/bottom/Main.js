import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CarouselCards from '../../../components/CarouselCards';
import Header from '../../../components/Header';
import {getAllProduct} from '../../../redux/action/ProductActions';

const Main = () => {
  // const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    data: products,
    loading,
    error,
  } = useSelector(state => state.ProductReducer);

  useEffect(() => {
    dispatch(getAllProduct());
    // fetchProductData();
  }, [dispatch]);

  return (
    <ScrollView>
      <SafeAreaView style={{marginBottom: 10}}>
        <Header />
        <CarouselCards />
        <View style={styles.header}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Most Popular</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductList');
            }}>
            <Text style={styles.seeAllProduct}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          {!loading && products.length !== 0 ? (
            products.map((item, index) => (
              <View style={styles.banner} key={item}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Product', item),
                      console.log('myProductScreen', item.id);
                  }}>
                  <Image source={{uri: item.image}} style={styles.image} />
                </TouchableOpacity>
                <Image
                  source={require('../../../assets/Images/Favourite.png')}
                  style={styles.wishlist}
                />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.body}>{item.description}</Text>
                <Text style={styles.body}>${item.price}</Text>
              </View>
            ))
          ) : (
            <ActivityIndicator />
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  banner: {
    flexBasis: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: 'red',
  },
  seeAllProduct: {
    color: 'orange',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 10,
  },
  wishlist: {
    width: 30,
    height: 30,
    left: 110,
    bottom: 370,
  },
  midContainer: {
    display: 'flex',
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18,
    color: 'black',
    padding: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
  },
  image: {
    width: 160,
    height: 180,
  },
  name: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    color: '#222',
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
});
export default Main;
