import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

export const fipeInstance = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
});
