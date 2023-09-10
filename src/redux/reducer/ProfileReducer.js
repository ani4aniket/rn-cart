import {REMOVE_LOGIN, SAVE_LOGIN} from '../action/ActionTypes';

const initialState = {
  user: null,
  error: null,
};

function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_LOGIN:
      return {
        ...state,
        user: action.payload,
        error: null,
      };

    case REMOVE_LOGIN:
      return {
        ...state,
        user: null,
        error: null,
      };

    default:
      return state;
  }
}

export default ProfileReducer;
