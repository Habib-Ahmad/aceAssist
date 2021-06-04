import Axios from "axios";
import { ADMIN_TOKEN, CLIENT_TOKEN } from "./token";

let urls = {
  test: "http://localhost:4040/api/",
};

const api = Axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: urls["test"],
  transformResponse: Axios.defaults.transformResponse.concat((data) => {
    if (data.message === "Unauthorized") {
      localStorage.removeItem(ADMIN_TOKEN);
      localStorage.removeItem(CLIENT_TOKEN);
      window.location.reload();
      return false;
    }
    return data;
  }),
});

const token = localStorage.getItem(ADMIN_TOKEN);

api.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
