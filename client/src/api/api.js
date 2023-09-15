import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const logIn = (authData) => {
  return API.post("/user/login", authData);
};

export const signUp = (authData) => {
  return API.post("/user/signup", authData);
};
