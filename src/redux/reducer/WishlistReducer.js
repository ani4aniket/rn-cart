import {
  ADD_TO_WISHLIST,
  EMPTY_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../action/ActionTypes';
const initialState = {
  wishlist: [],
};
export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      const deletedArrayWishlist = state.wishlist.filter(item => {
        return item.id !== action.payload;
      });
      return {...state, wishlist: deletedArrayWishlist};

    case EMPTY_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    default:
      return state;
  }
};
export default WishlistReducer;
