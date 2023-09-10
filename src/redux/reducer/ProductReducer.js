import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from '../action/ProductActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
}

export default ProductReducer;
