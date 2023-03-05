const API_BASE_URL = 'https://economia.awesomeapi.com.br';

export const fetchCurrencyAPI = async () => {
  const request = await fetch(`${API_BASE_URL}/json/all`);
  const response = await request.json();
  return response;
};

export default fetchCurrencyAPI;
