// Coloque aqui suas actions
import { fetchCurrencyAPI } from '../services/currencyAPI';

export const USER_MAIL_SUCCESS = 'USER_MAIL_SUCCESS';
export const CURRENCY_API_REQUEST = 'CURRENCY_API_REQUEST';
export const CURRENCY_API_SUCCESS = 'CURRENCY_API_SUCCESS';
export const WALLET_SUBMIT_SUCCESS = 'WALLET_SUBMIT_SUCCESS';

export const emailAction = (payload) => ({
  type: USER_MAIL_SUCCESS,
  payload,
});

export const requestCurrencyAPI = (payload) => ({
  type: CURRENCY_API_REQUEST,
  payload,
});

export const receiveCurrencyAPI = (payload) => ({
  type: CURRENCY_API_SUCCESS,
  payload,
});

export const walletAction = (payload) => ({
  type: WALLET_SUBMIT_SUCCESS,
  payload,
});

export const currencyAPIThunk = () => async (dispatch) => {
  const response = await fetchCurrencyAPI();

  const { USD, CAD, EUR, GBP, ARS, BTC, LTC,
    JPY, CHF, AUD, CNY, ILS, ETH, XRP } = response;

  const payload = [USD, CAD, EUR, GBP, ARS, BTC, LTC, JPY, CHF, AUD, CNY, ILS, ETH, XRP];
  dispatch(receiveCurrencyAPI(payload));
};
