import {REMOVE_LOGIN, SAVE_LOGIN} from './ActionTypes';
export const saveLogin = payload => {
  return {
    type: SAVE_LOGIN,
    payload: payload,
  };
};

export const removeLogin = () => {
  return {
    type: REMOVE_LOGIN,
  };
};
