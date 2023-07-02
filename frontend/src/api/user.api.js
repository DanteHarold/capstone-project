import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/users",
});

export const getAllUsers = () => {
  return usersApi.get("/");
};

export const getUserById = (id) => {
  return usersApi.get(`/${id}/`);
};

export const createUser = (user) => {
  return usersApi.post("/", user);
};

export const deleteUserById = (id) => {
  return usersApi.delete(`/${id}`);
};

export const updateUserById = (id, user) => {
  return usersApi.put(`/${id}/`, user);
};
