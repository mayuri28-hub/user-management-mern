import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

// Get all users
export const getUsers = () => {
    return axios.get(API_URL);
};

// Get user by ID
export const getUserById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Create user
export const createUser = (userData) => {
    return axios.post(API_URL, userData);
};

// Update user
export const updateUser = (id, userData) => {
    return axios.put(`${API_URL}/${id}`, userData);
};

// Delete user
export const deleteUser = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};