import Axios from "axios";
import { logout } from "./localstorage";
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
      logout();
      window.location.reload();
      return false;
    }
    return data;
  }),
});

const token = localStorage.getItem(ADMIN_TOKEN);
const clientToken = localStorage.getItem(CLIENT_TOKEN);

api.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${token}`;
  config.headers.client_auth = `Bearer ${clientToken}`;
  return config;
});

export default api;
