import {
  ADD_TO_WISHLIST,
  EMPTY_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../action/ActionTypes';
const initialState = {
  wishlist: [],
};
console.log('Wishlisttttstates>>>>>>>', initialState);
export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      console.log('wishlistActionPayload========== ', action.payload);
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case EMPTY_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case REMOVE_FROM_WISHLIST:
      const deletedArrayWishlist = state.filter(index => {
        return index !== action.payload;
      });
      return deletedArrayWishlist;

    default:
      return state;
  }
};
export default WishlistReducer;
