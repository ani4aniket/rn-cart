import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from '../action/ActionTypes';

const initialState = {
  cart: [],
  counter: {cart: 0},
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item already exists in the cart
      const existingCartItemIndex = state.cart.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingCartItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedCart = [...state.cart];
        if (!updatedCart[existingCartItemIndex].quantity) {
          updatedCart[existingCartItemIndex].quantity = 1;
        }
        updatedCart[existingCartItemIndex].quantity += 1;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}],
        };
      }

    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    case REMOVE_FROM_CART: {
      const existingCartItemIndex = state.cart.findIndex(
        item => item.id === action.payload,
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[existingCartItemIndex].quantity > 1) {
          // Decrement the quantity of the item
          updatedCart[existingCartItemIndex].quantity -= 1;
        } else {
          // Remove the item from the cart if its quantity is 1
          updatedCart.splice(existingCartItemIndex, 1);
        }

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the item doesn't exist, return the current state
        return state;
      }
    }
    default:
      return state;
  }
};

export default CartReducer;
