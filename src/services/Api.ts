import axios from "axios";
import { AuthApi } from "./AuthApi";

const api = axios.create({
  baseURL: "https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1",
});

api.interceptors.request.use(async (config) => {
  const token = AuthApi.getToken();
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };

export const client = (endpoint: string) => {
  const get = (id: string = "") => api.get(`${endpoint}/${id}`);
  const post = (data: any) => api.post(endpoint, data);
  const put = (id: string, data: any) => api.put(`${endpoint}/${id}`, data);
  const patch = (data: any) => api.patch(endpoint, data);
  const remove = (id: string) => api.delete(`${endpoint}/${id}`);

  return {
    get,
    post,
    put,
    patch,
    remove,
  };
};
