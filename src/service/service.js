import http from "./config";
const service = {
  create: data => http.post("/service", data),
  get: () => http.get("/service/all", { params: { page: 1, limit: 20 } }),
  delete: id => http.delete("/service", { params: { id: id } }),
  uptade: data => http.put("/service", data),
};
export default service;
