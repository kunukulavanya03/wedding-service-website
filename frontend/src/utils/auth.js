import api from './api';

const authenticate = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default authenticate;