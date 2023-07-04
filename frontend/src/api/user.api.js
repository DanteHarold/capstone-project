import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://capstone-back.onrender.com/api/users",
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
