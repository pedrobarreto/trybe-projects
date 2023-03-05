// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_MAIL_SUCCESS } from '../actions';

const INITIAL_USER_STATE = {
  email: '',
};

const userReducer = (
  state = INITIAL_USER_STATE,
  action,
) => {
  switch (action.type) {
  case USER_MAIL_SUCCESS:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};
export default userReducer;
