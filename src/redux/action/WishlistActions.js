import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  EMPTY_WISHLIST,
} from './ActionTypes';
export const addToWishlist = payload => {
  console.log('WishlistDataPayload', payload);
  return {
    type: ADD_TO_WISHLIST,
    payload: payload,
  };
};
export const removeItemFromWishlist = index => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: index,
  };
};
export const emptyWishlist = payload => {
  return {
    type: EMPTY_WISHLIST,
    payload: payload,
  };
};
