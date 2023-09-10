import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {getAllProduct} from '../../../redux/action/ProductActions';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Search = () => {
  const {
    data: products,
    loading,
    error,
  } = useSelector(state => state.ProductReducer);
  const [search, setSearch] = useState('');
  // const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSearchedList] = useState([]);

  // console.log('productsinSearchBar', products.product.data);

  useEffect(() => {
    setSearchedList([]);
    const filterData = txt => {
      let newData = products.filter(item => {
        return item.name.toLowerCase().match(txt.toLowerCase());
      });
      setSearchedList(newData);
      console.log(newData);
    };

    filterData(search);
  }, [search, products]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          value={search}
          onChangeText={txt => {
            setSearch(txt);
          }}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        {searchedList.length > 0 && search.length > 0 && (
          <FlatList
            data={searchedList}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={styles.othercontainer}>
                  <View style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.evImage}
                        source={{uri: item.image}}
                      />
                    </View>
                    <View style={{justifyContent: 'flex-start'}}>
                      <View style={styles.vehichleName}>
                        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                      </View>
                      <View>
                        <Text> {item.description}</Text>
                      </View>
                      <View>
                        <Text> {'$' + item.price}</Text>
                      </View>
                      {/* <TouchableOpacity
                      onPress={() => {
                        onRemoveItem();
                      }}>
                      <Text style={styles.removeCart}>Remove From Cart</Text>
                    </TouchableOpacity>
                    <Text style={styles.detaills}>Quantity:1</Text> */}
                    </View>
                  </View>
                  <View />
                </View>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
    width: 320,
    alignSelf: 'center',
    marginTop: 10,
  },
  itemStyle: {
    // padding: 10,
  },
  textInputStyle: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    paddingLeft: 5,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },

  othercontainer: {
    justifyContent: 'space-between',
    marginVertical: 8,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    flex: 1,
  },
  removeCart: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 18,
  },
  detaills: {
    marginRight: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  touchableCartButton: {
    borderWidth: 0.5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 15,
  },

  red: {
    color: 'red',
    fontWeight: 'bold',
    padding: 8,
  },
  vehichleName: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  default: {
    color: 'blue',
    fontWeight: 'bold',
    padding: 8,
  },
  imageView: {
    marginHorizontal: 2,
    flexDirection: 'row',
    resizeMode: 'contain',
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  evImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'stretch',
    width: 110,
    height: 150,
  },
  textContainer: {
    fontFamily: 'roboto',
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    fontSize: 20,
    marginHorizontal: 6,
    paddingHorizontal: 8,
    elevation: 8,
    // backgroundColor: '#fff',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Search;
