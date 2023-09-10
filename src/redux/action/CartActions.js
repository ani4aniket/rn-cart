import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from './ActionTypes';
export const addToCart = payload => {
  console.log('payload', payload);

  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};
export const removeItemFromCart = index => {
  return {
    type: REMOVE_FROM_CART,
    payload: index,
  };
};
export const emptyCart = payload => {
  return {
    type: EMPTY_CART,
  };
};
