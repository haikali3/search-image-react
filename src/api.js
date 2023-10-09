import axios from 'axios';

const searchImages = async (term) => {
  const response = axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 6nf--ECg9RFSiBrERRsAFzh9uAsRsuHUron1dVy4b7U',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
