import axios from 'axios';

const API_KEY = '00RhI8PPVrhzHstBju5mcoaVf5eXlgU3swqtauco';

const fetchFromApi = async (rover, query) => {
  const { data } = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos/?api_key=${API_KEY}&${query}`,
  );

  return data;
};

export default fetchFromApi;
