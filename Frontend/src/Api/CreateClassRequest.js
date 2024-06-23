import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createClass = (classData) =>
  API.post("/api/v1/class/{classSpaceId}/createClass", classData);

export const getClasses = () => API.get(`/api/v1/class/${id}`);
