// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  CURRENCY_API_SUCCESS, CURRENCY_API_REQUEST, WALLET_SUBMIT_SUCCESS,
} from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const walletReducer = (
  state = INITIAL_WALLET_STATE,
  action,
) => {
  switch (action.type) {
  case WALLET_SUBMIT_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case CURRENCY_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      isFetching: false,
    };
  case CURRENCY_API_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  default:
    return state;
  }
};
export default walletReducer;
