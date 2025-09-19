const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('token');

const req = async (path, method = 'GET', body = null) => {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Erro na requisição');
  return data;
};

export default {
  login: (creds) => req('/auth/login', 'POST', creds),
  register: (creds) => req('/auth/register', 'POST', creds),
  getProducts: () => req('/products'),
  createProduct: (payload) => req('/products', 'POST', payload),
  updateProduct: (id, payload) => req(`/products/${id}`, 'PUT', payload),
  deleteProduct: (id) => req(`/products/${id}`, 'DELETE', null),
  // etc...
};