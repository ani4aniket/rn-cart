import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import callApi from '../../../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchProductData();
  }, []);
  const fetchProductData = async () => {
    try {
      const response = await callApi('/products');
      console.log('responseDataScroolView>>>> 2', response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error retrieving product banner:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((item, index) => (
          <View style={styles.banner} key={item}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Product', item),
                  console.log('myProductScreen', item.id);
              }}>
              <Image source={{uri: item.image}} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.body}>{item.description}</Text>
            <Text style={styles.body}>${item.price}</Text>
          </View>
        ))}
      </View>
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
  },
  seeAllProduct: {
    color: 'orange',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 10,
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
  },
});

export default ProductList;
