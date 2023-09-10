import React, {useState, useEffect, useRef} from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarousalCardItem';
import axios from 'axios';
import callApi from '../api';

const CarouselCards = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);
  const fetchProductData = async () => {
    try {
      const response = await callApi('/products');
      console.log('responseDataCarousal', response.data);
      setProducts(response);
      console.log('responseBanner', response.data);
    } catch (error) {
      console.error('Error retrieving product banner:', error);
    }
  };
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={products}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
        on
      />
    </View>
  );
};

export default CarouselCards;
