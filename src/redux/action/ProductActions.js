import callApi from '../../api';
import {FETCH_PRODUCTS} from './ActionTypes';

// export const getAllProduct = async payload => {
//   console.log('payload', payload);

//   const response = await callApi('/products');
//   return {
//     type: FETCH_PRODUCTS,
//     payload: response,
//   };
// };

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';

// Action creator
export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});

export const getAllProduct = () => {
  return dispatch => {
    dispatch(fetchDataBegin());

    return callApi('/products')
      .then(response => response)
      .then(json => {
        dispatch(fetchDataSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchDataError(error)));
  };
};
