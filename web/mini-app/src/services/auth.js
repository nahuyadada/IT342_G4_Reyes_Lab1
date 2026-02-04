import api from './api';

const TOKEN_KEY = 'auth_token';

const extractToken = (data) => data?.token || data?.jwt || data?.accessToken || null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = () => Boolean(getToken());

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const register = async (payload) => {
  const response = await api.post('/api/auth/register', payload);
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post('/api/auth/login', { email, password });
  const token = extractToken(response.data);
  if (!token) {
    throw new Error('Token not found in response');
  }
  setToken(token);
  return response.data;
};

export const logout = async () => {
  try {
    await api.post('/api/auth/logout');
  } catch (error) {
    // Ignore server errors on logout, still clear token locally
  } finally {
    clearToken();
  }
};

export const getProfile = async () => {
  const response = await api.get('/api/user/profile');
  return response.data;
};
