import axios from "axios";

const API_URL = "http://192.168.3.75:3001/api";
export const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});
