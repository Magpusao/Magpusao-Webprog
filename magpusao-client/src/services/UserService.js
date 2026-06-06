import axios from 'axios';
import constants from '../constants';
import usersSeed from '../assets/users.json';

const API = axios.create({
  baseURL: `${constants.HOST}/users`,
});

const roles = ['admin', 'editor', 'viewer'];

const normalizeUser = (user, index = 0) => ({
  id: user.id ?? user._id ?? index + 1,
  _id: user._id,
  firstName: String(user.firstName ?? '').trim(),
  lastName: String(user.lastName ?? '').trim(),
  age: String(user.age ?? '').trim(),
  gender: String(user.gender ?? 'other').trim().toLowerCase(),
  contactNumber: String(user.contactNumber ?? '').trim(),
  email: String(user.email ?? '').trim().toLowerCase(),
  role: roles.includes(String(user.role ?? '').trim().toLowerCase()) ? String(user.role).trim().toLowerCase() : 'editor',
  username: String(user.username ?? '').trim(),
  password: String(user.password ?? '').trim(),
  address: String(user.address ?? '').trim(),
  isActive: user.isActive !== false,
});

const seedUsers = usersSeed.map(normalizeUser);

export const fetchUsers = async () => {
  try {
    const { data } = await API.get('/');
    return data.map(normalizeUser);
  } catch {
    return seedUsers;
  }
};

export const createUser = async (user) => {
  const { data } = await API.post('/', user);
  return normalizeUser(data);
};

export const updateUser = async (id, user) => {
  const { data } = await API.put(`/${id}`, user);
  return normalizeUser(data);
};

export const deleteUser = async (id) => {
  await API.delete(`/${id}`);
};

export const loginUser = async (credentials) => {
  const { data } = await API.post('/login', credentials);
  return data;
};
