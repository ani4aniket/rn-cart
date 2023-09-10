import {applyMiddleware, compose, createStore} from 'redux';
import CartReducer from '../reducer/CartReducer';
import WishlistReducer from '../reducer/WishlistReducer';
import ProductReducer from '../reducer/ProductReducer';
import ProfileReducer from '../reducer/ProfileReducer';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  CartReducer,
  WishlistReducer,
  ProductReducer,
  ProfileReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export default store;
