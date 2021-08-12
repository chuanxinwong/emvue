import axios from "axios";

const baseURL = "/api/v1"

const instance = axios.create({
  baseURL: baseURL,
  timeout: 10 * 1000,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  function (response) {
    const { status, data } = response;
    if (status == 200) {
      return data;
    } else {
      return Promise.reject(response);
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);






