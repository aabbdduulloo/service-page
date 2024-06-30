import axios from "axios";

const http = axios.create({
  baseURL: "https://service.olimjanov.uz/v1",
});

http.interceptors.request.use(config => {
  const acces_token = localStorage.getItem("acces_token");
  if (acces_token) {
    config.headers["Authorization"] = acces_token;
  }
  return config;
});
export default http;
