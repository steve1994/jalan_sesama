import axios from "axios";

export const API_URL = "http://192.168.3.75:3001/";
export const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});
