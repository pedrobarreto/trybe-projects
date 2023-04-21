const API_BASE_URL = 'https://swapi-trybe.herokuapp.com';

const fetchStarwarsAPI = async () => {
  const request = await fetch(`${API_BASE_URL}/api/planets/`);
  const response = await request.json();
  return response;
};

export default fetchStarwarsAPI;
