import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/', 
});

export const getVagas = async () => {
  try {
    const response = await api.get('/vagasdto');
    return response.data;
  } catch (error) {
    console.error('There was an error making the request:', error);
    throw error;
  }
};

export default api;
